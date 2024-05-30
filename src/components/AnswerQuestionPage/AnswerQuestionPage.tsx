import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AnswerQuestion from '../AnswerQuestion/AnswerQuestion'
import Button from '@mui/material/Button'
import { ClassworkType } from '../../lib/types/Classwork'
import { useState, useEffect } from 'react'

const mockClasswork: ClassworkType = {
  title: 'Exemplo de Atividade',
  datePosting: '2023-05-30',
  endDate: '2023-06-15',
  description: 'Descrição da atividade',
  questions: [
    {
      description: 'Qual a capital da França?',
      correctAnswerKey: 'paris',
      options: [
        { key: 'paris', description: 'Paris' },
        { key: 'londres', description: 'Londres' },
        { key: 'berlim', description: 'Berlim' },
        { key: 'madrid', description: 'Madrid' }
      ]
    },
    {
      description: 'Qual a capital da Alemanha?',
      correctAnswerKey: 'berlim',
      options: [
        { key: 'paris', description: 'Paris' },
        { key: 'londres', description: 'Londres' },
        { key: 'berlim', description: 'Berlim' },
        { key: 'madrid', description: 'Madrid' },
        { key: 'Buenos Aires', description: 'Buenos Aires' }
      ]
    }
  ]
}

export default function AnswerQuestionPage() {
  const [classwork, setClasswork] = useState<ClassworkType>()

  useEffect(() => {
    setClasswork(mockClasswork)
  }, [])

  return (
    <Box>
      <Typography variant='h5' sx={{ marginBottom: '20px' }}>
        {classwork?.title}
      </Typography>
      <Box sx={{
        width: '100%',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        overflowY: 'auto',
      }}>
        {classwork?.questions.map((question, index) => (
          <AnswerQuestion key={index} question={question} />
        ))}
        <Button variant='contained'>Finalizar</Button>
      </Box>
    </Box>
  )
}
