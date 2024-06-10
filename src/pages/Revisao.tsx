import { Box, Radio, Typography } from '@mui/material'
import { ReviewClasswork } from '../lib/types/ReviewClasswork'
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io'

export default function Revisao() {
	const classwork: ReviewClasswork = {
		id: '1',
		user: {
			id: '1',
			name: 'Gustavo Alcantara Ribeiro',
			email: 'gustavo.gmail.com',
		},
		datePosting: '2024-05-08',
		questionAnswers: [
			{
				optionKey: 'c',
				question: {
					id: '1',
					description: 'Qual é a capital do Brasil?',
					correctAnswerKey: 'c',
					options: [
						{ key: 'a', description: 'Rio de Janeiro' },
						{ key: 'b', description: 'São Paulo' },
						{ key: 'c', description: 'Brasília' },
						{ key: 'd', description: 'Curitiba' }
					]
				},
			},
			{
				optionKey: 'd',
				question: {
					id: '2',
					description: 'Qual é a capital do Brasil?',
					correctAnswerKey: 'c',
					options: [
						{ key: 'a', description: 'Rio de Janeiro' },
						{ key: 'b', description: 'São Paulo' },
						{ key: 'c', description: 'Brasília' },
						{ key: 'd', description: 'Curitiba' }
					]
				},
			}
		],
	}

	const getQuestionColor = (correctAnswerKey: string, currentOptionKey: string, userQuestionKey: string): string => {
		if(correctAnswerKey === currentOptionKey) {
			return '#EAFFEA'
		}

		if(currentOptionKey === userQuestionKey && currentOptionKey !== correctAnswerKey) {
			return '#FFEAEA'
		}

		return '#FFFFFF'
	}

	const getQuestionType = (correctAnswerKey: string, currentOptionKey: string, userQuestionKey: string): string => {
		if(correctAnswerKey === currentOptionKey) {
			return 'CORRECT'
		}

		if(currentOptionKey === userQuestionKey && currentOptionKey !== correctAnswerKey) {
			return 'WRONG'
		}

		return ''
	}
	
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px 42px' }}>
			<Typography sx={{ fontSize: 18, fontWeight: 800 }}>Revisão Questionário</Typography>

			<Box sx={{ border: '1px solid #BEBEBE', borderRadius: '10px', padding: '16px' }}>
				<Box sx={{ display: 'flex', gap: '4px' }}>
					<Typography sx={{ fontSize: 14, fontWeight: 700 }}>Aluno:</Typography>
					<Typography sx={{ fontSize: 14, fontWeight: 500, color: '#646363' }}>{classwork.user.name}</Typography>
				</Box>

				<Box sx={{ display: 'flex', gap: '4px' }}>
					<Typography sx={{ fontSize: 14, fontWeight: 700 }}>Data de Entrega:</Typography>
					<Typography sx={{ fontSize: 14, fontWeight: 500, color: '#646363' }}>20/02/2024</Typography>
				</Box>
			</Box>

			{classwork.questionAnswers.map((question, index) => (
				<Box sx={{ border: '1px solid #BEBEBE', borderRadius: '10px', paddingBlock: '16px' }}>
					<Typography sx={{ fontSize: 16, fontWeight: 800, padding: '8px 26px' }}>Questão {index + 1}</Typography>
					<Typography sx={{ fontSize: 18, fontWeight: 700, padding: '8px 26px' }}>{question.question.description}</Typography>

					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						{question.question.options.map(option => (
							<Box sx={{ 
								display: 'flex', 
								alignItems: 'center', 
								justifyContent: 'space-between',
								backgroundColor: getQuestionColor(question.question.correctAnswerKey, option.key, question.optionKey),
								padding: '4px 26px',
								cursor: 'pointer',
								userSelect: 'none'
							}}>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography sx={{ fontSize: 14, fontWeight: 500, width: 10 }}>{option.key}</Typography>
									<Radio checked={question.optionKey === option.key} disabled />
									<Typography sx={{ fontSize: 14, fontWeight: 500 }}>{option.description}</Typography>
								</Box>

								{getQuestionType(question.question.correctAnswerKey, option.key, question.optionKey) && 
									<Box sx={{ display: 'flex', alignItems: 'center', gap: '46px', marginRight: '24px' }}>
										<Typography sx={{ fontSize: 16, fontWeight: 500, color: getQuestionType(question.question.correctAnswerKey, option.key, question.optionKey) === 'CORRECT' ? '#005600' : '#D30000' }}>
											{getQuestionType(question.question.correctAnswerKey, option.key, question.optionKey) === 'CORRECT' ? 'Correta' : 'Errada'}
										</Typography>

										{
											getQuestionType(question.question.correctAnswerKey, option.key, question.optionKey) === 'CORRECT' 
												? <IoIosCheckmarkCircleOutline size={22} color='#005600' /> 
												: <IoIosCloseCircleOutline size={22} color='#D30000' />
										}
									</Box>
								}
							</Box>
						))}
					</Box>
				</Box>
			))}
		</Box>
	)
}