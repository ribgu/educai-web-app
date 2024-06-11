import { Question } from './Question'

export type ReviewClasswork = {
	id: string
	user: {
		id: string
		name: string
		email: string
	}
	datePosting: string
	classwork: {
		id: string
		title: string
		endDate: string
		description: string
		questions: Question[]
	},
	questionAnswers: {
		optionKey: string
		questionId: string
	}[]
}
