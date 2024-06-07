export type SendAnswerData = {
  datePosting: string
  questionAnswers: QuestionAnswers[]
}

export type QuestionAnswers = {
  optionKey: string
  questionId: string
}
