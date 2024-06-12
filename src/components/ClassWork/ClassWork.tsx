import Box from '@mui/material/Box/Box'
import IconButton from '@mui/material/IconButton/IconButton'
import Typography from '@mui/material/Typography/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useContext, useState } from 'react'
import Menu from '@mui/material/Menu/Menu'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import Divider from '@mui/material/Divider'
import { Classwork } from '../../lib/types/ClassWork'
import { AuthContext } from '../../contexts/AuthContext'
import { formatDate } from '../../utils/formartDate'

type ClassWorkProps = {
    ClassWork: Classwork
}

export default function ClassWork(props: ClassWorkProps) {
    const { role } = useContext(AuthContext)
    const { ClassWork } = props
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
                    <img src="/iconsPages/bookIcon.svg" alt="Livro" />
                    <Typography sx={{ fontSize: '16px', whiteSpace: 'nowrap', fontWeight: 'bold' }}>{ClassWork.title}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%', width: '60%', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                    Prazo:<b style={{ fontSize: '16px', color: '#5E5E5E' }}>{formatDate(ClassWork.endDate)}</b>
                </Box>
                <IconButton size='small' onClick={handleClick} sx={{ opacity: 0 }}>
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
                <Box sx={{ width: '50%', height: '100%', padding: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography sx={{ width: '100%', height: '20%', padding: '8px', justifySelf: 'flex-start', color: '#5E5E5E' }}>Data de publicação: <b style={{ fontSize: '16px', color: '#5E5E5E' }}>{formatDate(ClassWork.datePosting)}</b></Typography>
                    {role === 'STUDENT' &&
                        <Box sx={{
                            display: 'flex',
                            padding: '8px',
                            gap: '8px',
                            alignItems: 'center'
                        }}>
                            <Typography sx={{ color: '#5E5E5E' }}>Status:</Typography>
                            {role === 'STUDENT' && ClassWork.hasAnswered ? (
                                <img
                                    style={{ width: '16px', height: '16px' }}
                                    src='/iconsPages/sent.svg'
                                    alt='Ícone que indica que atividade foi enviada'
                                />
                            ) : (
                                <img
                                    style={{ width: '16px', height: '16px' }}
                                    src='/iconsPages/waiting.svg'
                                    alt='Ícone que indica que atividade não foi enviada'
                                />
                            )}
                            <Typography sx={{ color: '#5e5e5e', fontWeight: 'bold' }}>{ClassWork.hasAnswered ? 'Enviado' : 'Pendente'}</Typography>
                        </Box>
                    }
                    {ClassWork.description && <Typography sx={{ width: '100%', fontSize: '14px', padding: '8px', justifySelf: 'center', textAlign: 'justify', color: '#5E5E5E' }}>{ClassWork.description}</Typography>}
                </Box>
                <Box sx={{ width: '50%', height: '100%', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} ><b style={{ fontSize: '2rem' }}>{ClassWork.totalQuestions}</b> EXERCICIOS</Typography>
                    <Divider sx={{ borderBottomWidth: 2, borderColor: '#5E5E5E', borderRadius: '1px' }} />
                    {role === 'TEACHER' && <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} ><b style={{ fontSize: '2rem', gap: '10px' }}>{ClassWork.totalAnswers}</b> ALUNOS ENTREGARAM</Typography>}
                    {role === 'STUDENT' && ClassWork.hasAnswered && <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} ><b style={{ fontSize: '2rem', gap: '10px' }}>{ClassWork.correctPercentage && ClassWork.totalQuestions && ((ClassWork.correctPercentage / 100) * ClassWork.totalQuestions).toFixed(0)}/{ClassWork.totalQuestions}</b> acertos</Typography>}
                    {role === 'STUDENT' && !ClassWork.hasAnswered && (
                        <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>
                            N/A
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
