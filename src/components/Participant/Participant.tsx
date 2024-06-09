import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'

type ParticipantProps = {
    name: string
    url: string
}

export default function Participant(props: ParticipantProps) {
    const { name, url } = props
    const picture = url === null ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' : url
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
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
                <Typography sx={{ fontSize: '20px'}}>{name}</Typography>
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
        </Box>
    )
}
