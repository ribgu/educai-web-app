import { Question } from './Question'

export interface ClassworkType {
  title: string
  datePosting: string
  endDate: string
  description: string
  questions: Question[]
}
