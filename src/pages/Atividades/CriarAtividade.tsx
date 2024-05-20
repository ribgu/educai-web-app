import Box from '@mui/material/Box/Box'
import Question from '../../components/Question/Question'
import Layout from '../Layout'
import PageHeader from '../../components/PageHeader/PageHeader'
import { Button, Typography } from '@mui/material'
import { QuestionType } from '../../components/Question/Question'
import { useState } from 'react'

export default function CriarAtividade() {

  const questions: QuestionType[] = [
    {
      text: 'Questão 1',
      alternatives: [
        { text: 'A', selected: true },
        { text: 'A', selected: false },
        { text: 'A', selected: false },
        { text: 'A', selected: false }
      ]
    }
  ]

  const [question, setQuestion] = useState<QuestionType[]>(questions)

  const handleChangeQuestion = (value: string, index: number) => {
    const newQuestions = question.map((q, i) => {
      if (i === index) {
        return { ...q, text: value }
      }
      return q
    })
    setQuestion(newQuestions)
  }

  const deleteQuestion = (index: number) => {
    const newQuestions = question.filter((_q, i) => i !== index)
    setQuestion(newQuestions)
  }

  return (
    <Layout>
      <Box sx={{ width: '100%' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <PageHeader title={'aa'} />
        </Box>
        <Box sx={{ width: '100%', height: '89%', display: 'flex', padding: '24px', flexDirection: 'column' }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '16px',
            paddingLeft: '16px',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography sx={{ fontWeight: 600, fontSize: '24px' }}>Criar questionário</Typography>
            <Box sx={{}}>
              <Button>Gerar questões</Button>
              <Button>Finalizar</Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {question.map((q, i) => (
              <Question
                question={q}
                key={i}
                handleChangeQuestion={(value) => handleChangeQuestion(value, i)}
                deleteQuestion={() => deleteQuestion(i)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
