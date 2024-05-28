import Box from '@mui/material/Box/Box'
import Question from '../components/Question/Question'
import Layout from './Layout'
import PageHeader from '../components/PageHeader/PageHeader'
import { useState } from 'react'
import { Button, Typography } from '@mui/material'
import Alternative from '../components/Question/components/Option'

export default function Teste() {
  const [question, setQuestion] = useState('Questão mockada')
  const handleChangeQuestion = (value: string) => setQuestion(value)
  return (
    <Layout>
      <Alternative text='mock' />
    </Layout>
  )
}
