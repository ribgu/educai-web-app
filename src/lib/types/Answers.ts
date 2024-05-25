export type answers = {
  user: user
  datePosting: string
  questionAnswers: questionAnswers[]
}

type user = {
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