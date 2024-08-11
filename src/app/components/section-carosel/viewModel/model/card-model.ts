export interface CardModel {
    imagePath: String
    title: String
    description: String
}

export interface CaroselCards {
    title: String
    cards: CardModel[]
}

export interface ListCaroselCardsModel {
    carosels: CaroselCards[]
}
