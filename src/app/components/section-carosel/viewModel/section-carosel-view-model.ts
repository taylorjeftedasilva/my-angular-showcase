import { Injectable } from "@angular/core";
import { CaroselsItensService } from '../../../service/section-carosel-service/carosels-itens.service';
import { BehaviorSubject, catchError, Observable, of, Subject, take, takeUntil } from 'rxjs';
import { Success } from "src/app/shared/Result";
import { ResponseLitCaroselSingleton } from "src/app/shared/singletons/response-list-carosel";
import { ListCaroselCardsModel } from "./model/card-model";
import { ResponseError, ResponseSuccess } from "src/app/shared/ToDoRequest";

type ListCardResponse = ResponseSuccess<ListCaroselCardsModel>;


@Injectable({
    providedIn: 'root'
})
export class SectionCaroselViewModel {

    private singleton: ResponseLitCaroselSingleton;
    private listCardsSubject = new Subject<ListCardResponse>();
    private errorSubject = new Subject<ResponseError>();

    public listCards: Observable<ListCardResponse> = this.listCardsSubject.asObservable();
    public error: Observable<ResponseError> = this.errorSubject.asObservable();;

    constructor(private service: CaroselsItensService) {
        this.singleton = ResponseLitCaroselSingleton.getInstance();
    }

    toDoRequest(): void {
        const response = this.service.getCarouselCards().pipe(take(1));
        if (this.singleton.getListCaroselCardsData() === null) {
            response.subscribe({
                next: (result) => {
                    if (result instanceof Success) {
                        this.singleton.setListCaroselCardsData(result.success);
                        this.listCardsSubject.next(result)
                    } else {
                        this.errorSubject.next(result)
                    }
                },
                error: (err) => {
                    this.errorSubject.next(err);
                }
            });
        }  
        else {
            const listCards = this.singleton.getListCaroselCardsData() as ListCaroselCardsModel
            this.listCardsSubject.next(new Success(listCards));
          }
    }
}
