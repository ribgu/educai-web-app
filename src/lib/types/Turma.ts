import { Classworks } from "./ClassWork"

export type TurmaType = {
    id: string
    title: string
    course: string
    studentsCount?: number
    nextSubmission?: string
    atividades?: Classworks
}

export interface TurmasType extends Array<TurmaType>{}