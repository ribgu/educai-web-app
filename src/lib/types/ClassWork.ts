import { Question } from './Question'

export interface ClassworkType {
  id: string
  title: string
  datePosting: string
  endDate: string
  description: string
  questions: Question[]
}
