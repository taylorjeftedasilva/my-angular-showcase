import { Injectable, NgModule } from "@angular/core";
import { CaroselsItensService, ReponseResultCarosels, ResponseSucess, ResponseError } from '../../../service/section-carosel-service/carosels-itens.service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Success, Failure } from "src/app/shared/Result";
import { ResponseLitCaroselSingleton } from "src/app/shared/singletons/response-list-carosel";
import { ListCaroselCardsModel } from "./model/card-model";


@Injectable({
    providedIn: 'root'
})
export class SectionCaroselViewModel {

    listCards?: Observable<ResponseSucess>;
    error?: Observable<ResponseError>;
    private singleton: ResponseLitCaroselSingleton;

    constructor(private service: CaroselsItensService) {
        this.singleton = ResponseLitCaroselSingleton.getInstance();
    }

    toDoRequest(): void {
        const response = this.service.getCarouselCards();
        if (this.singleton.getListCaroselCardsData() === null) {
            this.listCards = response.pipe(
                filter(result => {
                    if (result instanceof Success) {
                        this.singleton.setListCaroselCardsData(result.success);
                        return true;
                    } 
                    return false;
                }),
                map(result => result as ResponseSucess)
            );

            this.error = response.pipe(
                filter(result => result instanceof Failure),
                map(result => result as ResponseError)
            );
        } else {
            const listCards = this.singleton.getListCaroselCardsData() as ListCaroselCardsModel
            this.listCards = of(new Success(listCards));
          }
    }
    
}
