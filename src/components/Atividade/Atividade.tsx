import Box from '@mui/material/Box/Box'
import IconButton from '@mui/material/IconButton/IconButton'
import Typography from '@mui/material/Typography/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState } from 'react'
import Menu from '@mui/material/Menu/Menu'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import AssignmentIcon from '@mui/icons-material/Assignment'
import Divider from '@mui/material/Divider'
import {  AnswersList } from '../../lib/types/Answers'
import { Participante } from '../../lib/types/Participante'
import { Classwork } from '../../lib/types/ClassWork'

const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
}

const formatarData = (date: string) => {
    const dateParts = date.split("-");
    const data = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt( dateParts[2]));
    const day = data.getDate().toString().padStart(2, '0');
    const month = (data.getMonth() + 1).toString().padStart(2, '0');
    const year = data.getFullYear().toString();
    return `${day}/${month}/${year}`;
}

export default function Atividade(atividade: Classwork) {
    const {id, title, datePosting, endDate, description, totalQuestions, totalAnswers} = atividade
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (editOrDelete: string) => {
        setAnchorEl(null)

        if (editOrDelete === 'edit') {
            console.log('Editando')
        } else if (editOrDelete === 'delete') {
            console.log('Deletando')
        }
    }

    return (
        <Box sx={{ width: '100%', height: '30vh', border: '2px solid #BEBEBE', borderRadius: '10px' }}>
            <Box sx={{
                width: '100%',
                height: '20%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '8px',
                borderBottom: '2px solid #BEBEBE',
                borderColor: '#BEBEBE'
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%', width: '60%', alignItems: 'center', gap: '10px' }}>
                    <AssignmentIcon sx={{
                        width: '26px', marginBottom: '5px'
                    }}/>
                    <Typography sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}>{title}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%', width: '60%', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', paddingRight:'20px' }}>
                    Prazo: <b>{formatarData(endDate)}</b>
                </Box>
            </Box>
            <Box sx={{ width: '100%', height: '80%', padding: '8px', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px' }}>
                <Box sx={{ width: '50%', height: '100%', padding: '8px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <Typography sx={{width: '100%', height: '20%', padding: '8px', justifySelf: 'flex-start'}}>Data de publicação: <b>{formatarData(datePosting)}</b>    </Typography>
                    {description && <Typography sx={{ width: '100%', fontSize: '14px', padding: '8px', justifySelf: 'center',textAlign: 'justify' }}>{description}</Typography>}
                </Box>
                <Box sx={{ width: '50%', height: '100%', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
                    <Typography sx={{ display: 'flex', alignItems: 'center',  gap: '10px' }} ><b style={{fontSize:'2rem'}}>{totalQuestions}</b> EXERCICIOS</Typography>
                    <Divider sx={{ borderBottomWidth: 2, borderColor: '#5E5E5E', borderRadius: '1px'}}/>
                    <Typography sx={{ display: 'flex', alignItems: 'center',  gap: '10px' }} ><b style={{fontSize:'2rem', gap: '10px'}}>{totalAnswers}</b> ALUNOS ENTREGARAM</Typography>
                </Box>
            </Box>
        </Box>
    )
}
