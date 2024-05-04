import MoreVertIcon from '@mui/icons-material/MoreVert'
import Box from '@mui/material/Box/Box'
import IconButton from '@mui/material/IconButton/IconButton'
import Menu from '@mui/material/Menu/Menu'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import Typography from '@mui/material/Typography/Typography'
import { useState } from 'react'
import { TurmaType } from '../../lib/types/Turma'

interface TurmaProps extends TurmaType {
    isTeacher: boolean
    onClick: () => void
}

export default function Turma(props: TurmaProps) {
    const { title, course, nextSubmission, studentsCount, isTeacher, onClick } = props
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
        <Box sx={{ 
            cursor: 'pointer', 
            width: '16vw', 
            height: '14vh', 
            border: '1px solid #BEBEBE', 
            borderRadius: '10px', 
            boxShadow: '0px 2px 3px 1px #00000012',
            userSelect: 'none'
        }} 
        onClick={onClick}>
            <Box sx={{
                width: '100%',
                height: '35%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: '16px',
                paddingRight: '6px',
                borderBottom: '1px solid #BEBEBE',
                borderColor: '#BEBEBE'
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%', width: '60%', alignItems: 'center', gap: '10px' }}>
                    <img src='./logos/bookTwo.svg' alt='Ícone de livro' style={{ width: '26px', marginBottom: '3px' }} />
                    <Typography sx={{ fontSize: '16px', whiteSpace: 'nowrap', fontWeight: 500 }}>{title}</Typography>
                </Box>
                <IconButton sx={{ justifyContent: 'end' }} size='small' onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
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
            <Box sx={{ width: '100%', height: '65%', padding: '8px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <Typography sx={{ display: 'flex', gap: '4px', fontSize: 14, color: '#5E5E5E' }}>
                    Disciplina: 
                    <Typography sx={{ color: '#5E5E5E', fontWeight: 700, fontSize: 14 }}>{course}</Typography>
                </Typography>

                {isTeacher ? 
                    <Typography sx={{ display: 'flex', gap: '4px', fontSize: 14, color: '#5E5E5E', whiteSpace: 'nowrap' }}>
                        Quantidade de alunos: 
                        <Typography sx={{ color: '#5E5E5E', fontWeight: 700, fontSize: 14, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {studentsCount}
                        </Typography>
                    </Typography>
                    :
                    <Typography sx={{ display: 'flex', gap: '4px', fontSize: 14, color: '#5E5E5E', whiteSpace: 'nowrap' }}>
                        Próxima entrega: 
                        <Typography sx={{ color: '#5E5E5E', fontWeight: 700, fontSize: 14, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {nextSubmission}
                        </Typography>
                    </Typography>
                }
            </Box>
        </Box>
    )
}
