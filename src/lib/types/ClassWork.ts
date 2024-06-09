import { Question } from './Question'

export type Classwork = {
  id?: string
  title: string
  datePosting: string
  endDate: string
  description: string
  totalAnswers?: number
  totalQuestions?: number
  questions: Question[]
}
