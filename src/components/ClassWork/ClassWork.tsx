import Box from '@mui/material/Box/Box'
import IconButton from '@mui/material/IconButton/IconButton'
import Typography from '@mui/material/Typography/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState } from 'react'
import Menu from '@mui/material/Menu/Menu'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import AssignmentIcon from '@mui/icons-material/Assignment'
import Divider from '@mui/material/Divider'
import { Classwork, ClassworksAnswered } from '../../lib/types/ClassWork'

type ClassWorkProps = {
    ClassWork?: Classwork
    ClassworkStudent?: ClassworksAnswered
    IsStudent: boolean
}

export default function ClassWork(props: ClassWorkProps) {
    const { ClassWork, ClassworkStudent, IsStudent } = props
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
        <Box sx={{ width: '100%', height: '30vh', border: '1px solid #BEBEBE', borderRadius: '10px' }}>
            <Box sx={{
                width: '100%',
                height: '20%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '8px',
                borderBottom: '1px solid #BEBEBE',
                borderColor: '#BEBEBE'
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%', width: '60%', alignItems: 'center', gap: '10px' }}>
                    <AssignmentIcon sx={{
                        width: '26px', marginBottom: '5px'
                    }}/>
                    <Typography sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}>{ClassWork?.title || ClassworkStudent?.title || '-'}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%', width: '60%', alignItems: 'center', gap: '10px', justifyContent: 'flex-end' }}>
                    Prazo: <b>{ClassWork?.endDate || ClassworkStudent?.endDate || '-'}</b>
                </Box>
                <IconButton size='small' onClick={handleClick} sx={{opacity: 0}}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => { handleClose('edit') }}>
                        Editar
                    </MenuItem>
                    <MenuItem onClick={() => { handleClose('delete') }}>
                        Apagar
                    </MenuItem>
                </Menu>
            </Box>
            <Box sx={{ width: '100%', height: '80%', padding: '8px', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px' }}>
                <Box sx={{ width: '50%', height: '100%', padding: '8px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <Typography sx={{width: '100%', height: '20%', padding: '8px', justifySelf: 'flex-start'}}>Data de publicação: <b>{ClassWork?.datePosting || ClassworkStudent?.datePosting || '-'}</b>    </Typography>
                    {ClassWork?.description || ClassworkStudent?.description && <Typography sx={{ width: '100%', fontSize: '14px', padding: '8px', justifySelf: 'center',textAlign: 'justify' }}>{ClassWork?.description || ClassworkStudent?.description}</Typography>}
                </Box>
                <Box sx={{ width: '50%', height: '100%', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
                    <Typography sx={{ display: 'flex', alignItems: 'center',  gap: '10px' }} ><b style={{fontSize:'2rem'}}>{ClassWork?.totalQuestions || ClassworkStudent?.totalQuestions || '-'}</b> EXERCICIOS</Typography>
                    <Divider sx={{ borderBottomWidth: 2, borderColor: '#5E5E5E', borderRadius: '1px'}}/>
                    {!IsStudent ? 
                        <Typography sx={{ display: 'flex', alignItems: 'center',  gap: '10px' }} ><b style={{fontSize:'2rem', gap: '10px'}}>{ClassWork?.totalAnswers}</b> ALUNOS ENTREGARAM</Typography>
                    :
                        <Typography sx={{ display: 'flex', alignItems: 'center',  gap: '10px', fontSize:'1.4rem' }} ><b style={{ gap: '10px'}}>Nota: {ClassworkStudent?.correctPercentage ? ClassworkStudent?.correctPercentage / 10 : 'PENDENTE'}</b></Typography>
                    }
                </Box>
            </Box>
        </Box>
    )
}
