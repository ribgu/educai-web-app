import { Question } from './Question'

export interface Classwork {
  id: string
  title: string
  datePosting: string
  endDate: string
  description: string
  questions: Question[]
}
