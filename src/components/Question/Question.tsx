import { IconButton, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box/Box'
import Alternative from './components/Alternative'
import { Delete } from '@mui/icons-material'
import CheckIcon from '@mui/icons-material/Check'

type QuestionProps = {
    question: string
    alternatives: string[]
}

export default function Question(props: QuestionProps) {
    const { question, alternatives } = props
    return (
        <Box sx={{ width: '100%', display: 'flex', padding: '16px', border: '1px solid #BEBEBE', borderRadius: '8px', flexDirection: 'column', gap: '8px' }} >
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px' }} >
                <Typography variant='h6'>Questão 1</Typography>
                <Typography variant='body2' color={'green'}>Completa</Typography>
            </Box>
            <TextField size='small' value={question}/>
            <Box>
                {alternatives.map((alternative, index) => (
                    <Alternative key={index} alternative={alternative} />
                ))}
            </Box>
            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }} >
                <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', gap: '8px' }}>
                    <CheckIcon />
                    <Typography variant='body2'>Selecione uma das opções acima para ser a correta</Typography>
                </Box>
                <IconButton>
                    <Delete />
                </IconButton>
            </Box>
        </Box>
    )
}