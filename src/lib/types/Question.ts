export type Question = {
  id: string
  description: string
  correctAnswerKey: string
  options: {
    key: string
    description: string
  }[]
}
