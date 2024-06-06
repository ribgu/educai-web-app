export type Question = {
  id?: string
  description: string
  correctAnswerKey: string
  options: {
    id?:string
    key: string
    description: string
  }[]
}
