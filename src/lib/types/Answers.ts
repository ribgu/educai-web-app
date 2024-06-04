export type Answers = {
  user: user
  datePosting: string
  questionAnswers: questionAnswers[]
}

export type user = {
    id: string
    name: string
    email: string
}

type questionAnswers = {
    optionKey: string
    questionId: questionId
}

type questionId = {
    timestamp: number
    date: string
}

export interface AnswersList extends Array<Answers>{}