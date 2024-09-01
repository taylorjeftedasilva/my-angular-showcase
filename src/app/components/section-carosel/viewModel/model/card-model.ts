
export interface CardText {
    text: string
    style: string
    image: string
}

export interface CardResults {
    title: CardText
    description: CardText
}


export interface CardTopics {
    contratante: string
    projeto: string
    tecnologias: [string]
    duracao: string
}

export interface CardDetail {
    imagePath: string
    title: CardText
    topicos: CardTopics
    resultados?: CardResults
}

export interface CardModel {
    imagePath: String
    title: String
    description: String
    cardDetail?: CardDetail
}

export interface CaroselCards {
    title: String
    cards: CardModel[]
}

export interface ListCaroselCardsModel {
    carosels: CaroselCards[]
}
