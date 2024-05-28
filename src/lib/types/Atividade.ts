export type AtividadeType = {
    title: string
    deadline: Date
    asignmentDate: Date
    description: string
    exercises: number
    answered: number
}

export interface AtividadesType extends Array<AtividadeType>{}