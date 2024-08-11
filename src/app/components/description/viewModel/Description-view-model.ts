import { ResponseLitCaroselSingleton } from "src/app/shared/singletons/response-list-carosel";
import { CardModel } from "../../section-carosel/viewModel/model/card-model";
import { Observable, of } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class DescriptionViewModel {

    cards?: Observable<CardModel>;
    private singleton: ResponseLitCaroselSingleton;

    constructor(private router: Router) {
        this.singleton = ResponseLitCaroselSingleton.getInstance();
    }

    private getURLParams(activatedRouter: ActivatedRoute): [string, string] {
        const carosel = activatedRouter.snapshot.paramMap.get("carosel-title") ?? ""
        const card = activatedRouter.snapshot.paramMap.get("card-slug") ?? ""
        return [carosel, card]
    }

    toDoRequest(activatedRouter: ActivatedRoute): void {
        const cards = this.singleton.getCard(...this.getURLParams(activatedRouter)) as CardModel;
        if(cards === undefined) {
          this.router.navigate(["/"])
          return;
        }
        this.cards = of(cards);
    }

}