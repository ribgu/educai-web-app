export interface AnswerType {
    datePosting: Date,
    questionAnswers: {
        optionKey: string,
        questionId: string
    }[]
  }