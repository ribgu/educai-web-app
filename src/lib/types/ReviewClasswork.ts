import { Question } from './Question'

export type ReviewClasswork = {
	id: string
	user: {
		id: string
		name: string
		email: string
	}
	datePosting: string
	questionAnswers: {
		optionKey: string
		question: Question
	}[]
}
