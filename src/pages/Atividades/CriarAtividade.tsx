import Box from '@mui/material/Box/Box'
import Question from '../../components/Question/Question'
import Layout from '../Layout'
import PageHeader from '../../components/PageHeader/PageHeader'
import { Button, Modal, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Question as QuestionType } from '../../lib/types/Question'
import FinalizarDialog from '../../components/FinalizarDialog/FinalizarDialog'
import { classWork } from '../../lib/types/ClassWork'
import useClient from '../../lib/client/useClient'
import { TurmaType } from '../../lib/types/Turma'
import GerarQuestaoModal from './GerarQuestaoModal/GerarQuestaoModal'
import { LuPlusCircle } from 'react-icons/lu'
import { BsStars } from 'react-icons/bs'

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
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [finishButtonIsEnabled, setFinishButtonIsEnabled] = useState<boolean>(false)

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

  useEffect(() => {
    const allQuestionsAreComplete = questions.every(q => q.description && q.options.every(o => o.description))

    if(allQuestionsAreComplete) {
      setFinishButtonIsEnabled(true)
    }
  }, [questions])

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

  const handleChangeQuestionDescription = (value: string, index: number) => {
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

  const handleAddQuestion = (question?: QuestionType) => {
    if(question) {
      setOpenModal(false)
      return setQuestions([...questions, question])
    }

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
      <Box sx={{ width: '100%', overflowY: 'auto' }} >
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
            <Typography sx={{ fontWeight: 700, fontSize: 18 }}>Criar questionário</Typography>
            <Box sx={{ display: 'flex', gap: '16px' }}>
              <Button
                onClick={() => setOpenModal(true)}
                variant="contained"
                startIcon={<LuPlusCircle color='#6730EC' size={22}/>}
                endIcon={<BsStars color='#6730EC' size={20}/>}
                sx={{
                  display: 'inline-flex',
                  gap: '8px',
                  backgroundColor: '#FFF',
                  color: '#170050',
                  border: '1px solid #6730EC', 
                  borderRadius: '10px', 
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  transition: 'background-color 0.3s, box-shadow 0.3s', 
                  '&:hover': {
                    backgroundColor: '#E6CCFF', 
                  },
                }}
              >
                Gerar Questões
              </Button>
              
              <FinalizarDialog
                title={title}
                setTitle={setTitle}
                datePosting={datePosting}
                endDate={endDate}
                setEndDate={setEndDate}
                description={description}
                setDescription={setDescription}
                onClick={handleCreateClassWork}
                enabled={finishButtonIsEnabled}
              />
            </Box>
          </Box>

          <Button 
            sx={{ textTransform: 'none', backgroundColor: '#7750DE', borderRadius: '10px', padding: '8px', fontWeight: 600, marginBottom: '12px' }}
            variant='contained' 
            onClick={() => handleAddQuestion()}>
              Adicionar nova questão
          </Button>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '20px' }}>
            {questions.map((q, i) => (
              <Question
                index={i}
                question={q}
                key={i}
                handleChangeQuestionDescription={(value) => handleChangeQuestionDescription(value, i)}
                deleteQuestion={() => deleteQuestion(i)}
              />
            ))}
          </Box>
        </Box>
      </Box>

      <Modal open={openModal} onClose={() => setOpenModal(false)} 
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{
          gap: '10px',
          backgroundColor: '#FFF',
          padding: '24px',
          borderRadius: '10px',
          width: '50%',
        }}>
          <GerarQuestaoModal handleAddQuestion={handleAddQuestion} />
        </Box>
      </Modal>
    </Layout>
  )
}
