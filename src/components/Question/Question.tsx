import { Button, IconButton, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box/Box'
import Option from './components/Option'
import { useEffect, useState } from 'react'
import { Question as QuestionType } from '../../lib/types/Question'
import { IoMdClose } from 'react-icons/io'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { FaRegCheckCircle, FaRegTrashAlt } from 'react-icons/fa'

type QuestionProps = {
    question: QuestionType
    handleChangeQuestionDescription: (value: string) => void
    deleteQuestion?: () => void
    index: number
}

export default function Question(props: QuestionProps) {
    const { question, handleChangeQuestionDescription, deleteQuestion, index } = props
    
    const [questionIsComplete, setQuestionIsComplete] = useState<boolean>(false)
    const [options, setOptions] = useState(question.options)
    const [correctAnswerKey, setCorrectAnswerKey] = useState(question.correctAnswerKey)

    useEffect(() => {
        const isComplete = options.every(option => option.description !== '') && question.description !== ''
        setQuestionIsComplete(isComplete)
    }, [question, options])

    const handleSetCorretAnswerKey = (correctAnswerKey: string) => {
        setCorrectAnswerKey(correctAnswerKey)
    }

    const handleDeleteAlternative = (key: string) => {
        const newOptions = options.filter(option => option.key !== key)
        setOptions(newOptions)
    }

    const handleAddAlternative = () => {
        const nextAlphabetKey = String.fromCharCode('a'.charCodeAt(0) + options.length)
        const newOption = { key: nextAlphabetKey, description: '' }
        setOptions([...options, newOption])
    }

    const handleChangeName = (key: string, value: string) => {
        const newOptions = options.map(option => {
            if (option.key === key) {
                return { ...option, description: value }
            }
            return option
        }
        )
        setOptions(newOptions)
    }

    return (
        <Box sx={{ width: '100%', display: 'flex', padding: '24px', border: '1px solid #BEBEBE', borderRadius: '8px', flexDirection: 'column', gap: '8px' }} >
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px' }} >
                <Typography variant='h6'>
                    Questão {index + 1}
                </Typography>
                <Typography variant='body2' color={questionIsComplete ? 'green' : 'red'}>
                    {questionIsComplete ? 'Completa' : 'Incompleta'}
                </Typography>

                {questionIsComplete ? <IoCheckmarkSharp color='green'/> : <IoMdClose color='red'/>}
            </Box>
            <TextField size='small' value={question.description} onChange={(e) => handleChangeQuestionDescription?.(e.target.value)} />
            <Box sx={{ borderBottom: '1px solid #BEBEBE', marginTop: '12px' }}>
                {options.map((option, index) => (
                    <Option
                        optionKey={option.key}
                        key={index}
                        description={option.description}
                        correctAnswerKey={correctAnswerKey}
                        handleSelectAlternative={() => handleSetCorretAnswerKey(option.key)}
                        handleDeleteAlternative={() => handleDeleteAlternative(option.key)}
                        handleChangeName={(value) => handleChangeName(option.key, value)}
                    />
                ))}
                <Box sx={{ width: '100%', paddingLeft: '16px', marginBottom: '12px' }}>
                    <Button sx={{ marginTop: '12px' }} onClick={handleAddAlternative}>
                        Adicionar alternativa
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', paddingInline: '8px' }} >
                <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', gap: '8px' }}>
                    <FaRegCheckCircle size={20} color='#7750DE'/>
                    <Typography variant='body2' color='#7750DE'>Selecione uma das opções acima para ser a correta</Typography>
                </Box>
                <IconButton onClick={deleteQuestion}>
                    <FaRegTrashAlt size={20} color='#7750DE'/>
                </IconButton>
            </Box>
        </Box>
    )
}
