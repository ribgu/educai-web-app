import Box from '@mui/material/Box/Box'
import Question from '../../components/Question/Question'
import Layout from '../Layout'
import PageHeader from '../../components/PageHeader/PageHeader'
import { Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Question as QuestionType } from '../../lib/types/Question'
import FinalizarDialog from '../../components/FinalizarDialog/FinalizarDialog'
import { classWork } from '../../lib/types/ClassWork'
import useClient from '../../lib/client/useClient'
import { TurmaType } from '../../lib/types/Turma'

type QuestionProps = {
  questions?: QuestionType[]
}

export default function CriarAtividade(props: QuestionProps) {
  const { questions: q } = props

  const client = useClient()
  const [title, setTitle] = useState('')
  const [turma, setTurma] = useState<TurmaType>()
  const datePosting = new Date().toISOString().split('T')[0]
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0])
  const [description, setDescription] = useState('')
  const classroomId = new URLSearchParams(window.location.search).get('classRoomId')?.split('?')[0]

  const [questions, setQuestions] = useState<QuestionType[]>(
    q || [
      {
        description: '',
        correctAnswerKey: 'a',
        options: [
          { key: 'a', description: '' },
          { key: 'b', description: '' },
          { key: 'c', description: '' },
          { key: 'd', description: '' }
        ]
      }
    ]
  )

  const handleCreateClassWork = () => {
    const classWork: classWork = {
      title,
      datePosting,
      endDate,
      description,
      questions
    }

    if (classroomId) client.createClassWork(classWork, classroomId)
  }

  const handleChangeQuestion = (value: string, index: number) => {
    const newQuestions = questions.map((q, i) => {
      if (i === index) {
        return { ...q, description: value }
      }
      return q
    })

    setQuestions(newQuestions)
  }

  const deleteQuestion = (index: number) => {
    const newQuestions = questions.filter((_q, i) => i !== index)
    setQuestions(newQuestions)
  }

  const classRoomId = new URLSearchParams(window.location.search).get('classRoomId')

  useEffect(() => {
    if (classRoomId) {
      client.getClassroomById(classRoomId).then((res) => setTurma(res))
    }
  }, [classRoomId])

  const handleAddQuestion = () => {
    const newQuestion: QuestionType = {
      description: '',
      correctAnswerKey: 'a',
      options: [
        { key: 'a', description: '' },
        { key: 'b', description: '' },
        { key: 'c', description: '' },
        { key: 'd', description: '' }
      ]
    }

    setQuestions([...questions, newQuestion])
  }

  return (
    <Layout>
      <Box sx={{ width: '100%' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <PageHeader title={turma?.title} />
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
              <Button
                onClick={handleAddQuestion}
              >Adicinar Questão</Button>
              <FinalizarDialog
                title={title}
                setTitle={setTitle}
                datePosting={datePosting}
                endDate={endDate}
                setEndDate={setEndDate}
                description={description}
                setDescription={setDescription}
                onClick={handleCreateClassWork}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {questions.map((q, i) => (
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
