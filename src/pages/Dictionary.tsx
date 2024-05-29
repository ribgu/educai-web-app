import IconButton from '@mui/material/IconButton/IconButton'
import BookIcon from '@mui/icons-material/Book'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { alpha } from '@mui/material/styles'
import { Box, TextField } from '@mui/material'

export default function Dictionary() {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSearch = () => {
        console.log(search)
        setSearch('')
    }

    return (
        <>
            <IconButton size='small' onClick={handleOpen}
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    margin: 1,
                    width: 50,
                    height: 50,
                    backgroundColor: '#A681FF',
                    '&:hover': {
                        backgroundColor: alpha('#A681FF', 0.85)
                    },
                    zIndex: 1000
                }}
            >
                <BookIcon sx={{ color: 'black' }} />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                sx={{padding: '32px' }}
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <BookIcon sx={{ color: 'black' }} />
                    Dicionário
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ display:'flex', flexDirection: 'row', alignItems: 'center', marginTop: '8px'}}>
                        <TextField label='Pesquisar' variant='outlined' fullWidth />
                        <Button
                            sx={{ marginLeft: 1, height: '100%', padding: '16px', paddingX: '24px'}}
                            variant='contained'
                            color='primary'
                            onClick={handleSearch}
                        >Buscar</Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}