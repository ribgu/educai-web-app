import IconButton from '@mui/material/IconButton/IconButton'
import BookIcon from '@mui/icons-material/Book'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { alpha } from '@mui/material/styles'
import { Box, TextField, Tooltip, Typography } from '@mui/material'
import useClient from '../lib/client/useClient'
import { DictonaryResponse } from '../lib/types/DictonaryResponse'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'

export default function Dictionary() {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [resultData, setResultData] = useState<DictonaryResponse | null>(null)
    const client = useClient()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setSearch('')
        setResultData(null)
    }

    const handleSearch = () => {
        client.getWordDefinition(search).then((data) => {
            setResultData(data)
        })
    }

    const listenAudio = (audioUrl: string) => {
        const audio = new Audio(audioUrl)
        audio.play()
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
                sx={{ padding: '32px' }}
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
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '8px' }}>
                        <TextField label='Pesquisar' variant='outlined' fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
                        <Button
                            sx={{ marginLeft: 1, height: '100%', padding: '16px', paddingX: '24px' }}
                            variant='contained'
                            color='primary'
                            onClick={handleSearch}
                        >Buscar</Button>
                    </Box>
                    {resultData && (
                        <Box sx={{ marginTop: '16px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'center' }}>
                                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Meanings</Typography>
                                {resultData.audio && (
                                    <Tooltip title='Ouvir pronúncia' placement='right'>
                                        <IconButton size='small' sx={{ marginTop: '4px' }} onClick={() => listenAudio(resultData.audio)}>
                                            <VolumeUpIcon sx={{ color: 'black' }} />
                                        </IconButton>
                                    </Tooltip>
                                )}
                            </Box>
                            {resultData.meanings.map((meaning, index) => (
                                <>
                                    <Typography key={index} variant='h6' sx={{ fontWeight: 'bold' }}>{meaning.partOfSpeech}</Typography>
                                    {meaning.definitions.map((definition, index) => (
                                        <Typography key={index}> - {definition}</Typography>
                                    ))}
                                </>
                            ))}
                        </Box>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}