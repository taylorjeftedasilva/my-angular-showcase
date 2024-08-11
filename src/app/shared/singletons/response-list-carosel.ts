import { CardModel, ListCaroselCardsModel } from "src/app/components/section-carosel/viewModel/model/card-model";

export class ResponseLitCaroselSingleton {

    private data: ListCaroselCardsModel | null = null;
    private static readonly object: ResponseLitCaroselSingleton = new ResponseLitCaroselSingleton();

    private constructor() {}

    static getInstance(): ResponseLitCaroselSingleton {
        return ResponseLitCaroselSingleton.object;
    }

    getListCaroselCardsData(): ListCaroselCardsModel | null {
        return this.data;
    }

    setListCaroselCardsData(data: ListCaroselCardsModel): void {
        if (data as ListCaroselCardsModel) {
            this.data = data;
        }  
    }

    getCard(caroselTitle: string, cardTitle: string): CardModel | undefined {
        const carosel = this.getListCaroselCardsData()?.carosels.find(carosel => carosel.title === caroselTitle )
        return carosel?.cards.find( card => card.title === cardTitle);
    } 
}