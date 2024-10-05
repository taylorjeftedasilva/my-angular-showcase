
export interface CardText {
    text: string
    style: string
    image: string
}

export interface CardResults {
    title: CardText
    description: CardText
}

export interface CardSectionItems {
    title: string
    title_text: string
    text: string
}

export interface CardSection {
    title_section: string
    ignore_menu_section: boolean
    items: [CardSectionItems]
}

export interface CardTopics {
    contratante: string
    projeto: string
    tecnologias: [string]
    duracao: string
    sections: [CardSection]
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
