export type TurmaType = {
    id: string
    title: string
    course: string
    studentsCount?: number
    nextSubmission?: string
}

export interface TurmasType extends Array<TurmaType>{}