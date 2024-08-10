import { Injectable } from "@angular/core";
import { CaroselsItensService, ReponseResultCarosels, ResponseSucess, ResponseError } from '../../../service/section-carosel-service/carosels-itens.service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Success, Failure } from "src/app/shared/Result";


@Injectable({
    providedIn: 'root'
})
export class SectionCaroselViewModel {

    listCards?: Observable<ResponseSucess>;
    error?: Observable<ResponseError>;

    constructor(private service: CaroselsItensService) {}

    toDoRequest() {
        const response$ = this.service.getCarouselCards();

        this.listCards = response$.pipe(
            filter(result => result instanceof Success),
            map(result => result as ResponseSucess)
        );

        this.error = response$.pipe(
            filter(result => result instanceof Failure),
            map(result => result as ResponseError)
        );
    }
    
}
