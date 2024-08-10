import { Injectable } from "@angular/core";
import { CaroselsItensService } from '../../../service/section-carosel-service/carosels-itens.service';
import { Observable } from 'rxjs';
import { ListCaroselCardsModel } from '../model/card-model';

@Injectable({
    providedIn: 'root'
})
export class SectionCaroselViewModel {

    private listCards$?: Observable<ListCaroselCardsModel>;

    constructor(private service: CaroselsItensService) {}

    toDoRequest(): Observable<ListCaroselCardsModel> {
        this.listCards$ = this.service.getCarouselCards();
        return this.listCards$
    }
}