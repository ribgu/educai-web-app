import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Modal from '../Modal/Modal'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'

type ParticipantProps = {
    name: string
    url: string
}

export default function Participant(props: ParticipantProps) {
    const { name, url } = props
    const picture = url === null ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' : url
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const [participantName, setParticipantName] = useState(name)
    const [modal, setModal] = useState<{ isLoading: boolean, isOpen: boolean, type: 'EDIT' | 'DELETE' | null }>({
        isLoading: false,
        isOpen: false,
        type: null
    })

    const handleClose = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, editOrDelete: string) => {
        event.stopPropagation()
        setAnchorEl(null)

        if (editOrDelete === 'edit') {
            setModal({
                ...modal,
                isOpen: true,
                type: 'EDIT'
            })
        } else if (editOrDelete === 'delete') {
            setModal({
                ...modal,
                isOpen: true,
                type: 'DELETE'
            })
        }
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px', gap: '5px' }}>
                <img src={picture} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                <Typography sx={{ fontSize: '20px' }}>{participantName}</Typography>
            </Box>
            <IconButton
                size="small"
                aria-label="more"
                id="participant-menu"
                onClick={(event) => setAnchorEl(event.currentTarget)}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={(event) => { handleClose(event, 'edit') }}>
                    Editar
                </MenuItem>
                <MenuItem onClick={(event) => { handleClose(event, 'delete') }}>
                    Apagar
                </MenuItem>
            </Menu>
            <Modal
                titulo={modal.type === 'DELETE' ? 'Deletar Participante' : 'Editar Participante'}
                altIcone={modal.type === 'DELETE' ? 'Deletar participante' : 'Editar participante'}
                variantButton='none'
                icone={modal.type === 'DELETE' ? '/iconsPages/iconExcluir.svg' : '/iconsPages/iconEditar.svg'}
                showModal={modal.isOpen}
                onClose={() => setModal({ ...modal, isOpen: false })}
                onOpen={() => setModal({ ...modal, isOpen: true })}>

                <Typography sx={{ fontSize: 16, color: '#5E5E5E' }}>
                    {
                        modal.type === 'DELETE'
                            ? <>Tem certeza que deseja deletar o post <strong>{name}?</strong></>
                            : 'Preenche os campos abaixo com as informações atualizadas'
                    }
                </Typography>

                {
                    modal.type === 'EDIT' &&
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <TextField
                            variant='outlined'
                            label='Título'
                            value={participantName}
                            onChange={(e) => setParticipantName(e.target.value)}
                        />
                    </Box>
                }

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button sx={{
                        color: 'black',
                        borderColor: '#5D1EF4',
                        '&:hover': {
                            backgroundColor: '#D8D8D8'
                        },
                        paddingY: '12px',
                        width: '48%'
                    }} variant='outlined' onClick={() => setModal({ ...modal, isOpen: false })}>{modal.type === 'DELETE' ? 'Não' : 'Cancelar'}</Button>

                    <LoadingButton sx={{
                        backgroundColor: '#6730EC',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#4D1EAD'
                        },
                        paddingY: '12px',
                        width: '48%'
                    }} variant='contained'
                        loading={modal.isLoading}>{modal.type === 'DELETE' ? 'Sim' : 'Atualizar'}
                    </LoadingButton>
                </Box>
            </Modal>
        </Box>
    )
}
