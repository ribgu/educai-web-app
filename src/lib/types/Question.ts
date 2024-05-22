export type Question = {
  description: string
  correctAnswerKey: string
  options: {
    key: string
    description: string
  }[]
}
