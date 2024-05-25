import { Box, Button, FormControlLabel, FormGroup, InputAdornment, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { RiLink } from 'react-icons/ri'
import React, { useState } from 'react'
import { CiMusicNote1 } from 'react-icons/ci'
import { LuFile } from 'react-icons/lu'
import FileInput from '../../../components/FileInput/FileInput'
import useClient from '../../../lib/client/useAIClient'

export default function GerarQuestaoModal() {
    const client = useClient()

    const [document, setDocument] = useState<File | null>(null)
    const [audio, setAudio] = useState<File | null>(null)
    const [instrucoes, setInstrucoes] = useState<string>('')
    const [linkYoutube, setLinkYoutube] = useState<string>('')

    const [errorMessage, setErrorMessage] = useState<string>('')

    const [selectedValue, setSelectedValue] = useState('instrucao')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue((event.target as HTMLInputElement).value)
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, set: React.Dispatch<React.SetStateAction<File | null>>) => {
        set(event.target.files ? event.target.files[0] : null)
    }

    const handleValueChange = (event: string, set: React.Dispatch<React.SetStateAction<string>>) => {
        set(event)
    }

    const handleClick = async () => {
        if (!instrucoes && !linkYoutube && !audio && !document) {
            setErrorMessage('A entrada acima deve ser preenchida!')
            return
        }

        let payload = {}

        selectedValue == 'linkYoutube' && (payload = { ...payload, youtubeLink: linkYoutube })
        selectedValue == 'mp3' && (payload = { ...payload, audio })
        selectedValue == 'documento' && (payload = { ...payload, document })
        selectedValue == 'instrucao' && (payload = { ...payload, instructions: instrucoes })

        const response = await client.generateQuestion(payload)

        console.log(response.data)

        setErrorMessage('')
    }

    return (
        <Box sx={{ width: '100%', padding: '25px 50px', display: 'flex', flexDirection: 'column', minHeight: '40vh' }}>
            <Box sx={{ paddingBottom: '20px' }}>
                <Typography sx={{ color: '#545454', fontWeight: 400, fontSize: 16, marginBottom: '6px' }}>
                    Escolha uma entradas:
                </Typography>

                <FormGroup>
                    <RadioGroup value={selectedValue} onChange={handleChange} sx={{ display: 'flex', gap: '10px', flexDirection: 'row' }}>
                        <FormControlLabel value="instrucao" control={<Radio />} label="Instrução" />
                        <FormControlLabel value="documento" control={<Radio />} label="Documento" />
                        <FormControlLabel value="linkYoutube" control={<Radio />} label="Link Youtube" />
                        <FormControlLabel value="mp3" control={<Radio />} label="MP3" />
                    </RadioGroup>
                </FormGroup>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                width: '100%',
                overflowY: 'auto'
            }}>
                {selectedValue == 'instrucao' && <TextField
                    onChange={(event) => handleValueChange(event.target.value, setInstrucoes)}
                    multiline
                    rows={3}
                    InputProps={{
                        startAdornment:
                            <InputAdornment position="start" sx={{ marginBottom: 'auto', marginTop: '10px' }}>
                                <IoChatbubblesOutline size={22} color='#7750DE' />
                            </InputAdornment>,
                        sx: { borderRadius: 2 }
                    }}
                    placeholder='Escreva instruções'
                    sx={{ fontSize: '16px', width: '100%' }}
                />}

                {selectedValue == 'linkYoutube' && <TextField
                    onChange={(event) => handleValueChange(event.target.value, setLinkYoutube)}
                    InputProps={{
                        startAdornment:
                            <InputAdornment position="start">
                                <RiLink size={22} color='#7750DE' />
                            </InputAdornment>,
                        sx: { borderRadius: 2 }
                    }}
                    placeholder='Link do Youtube'
                    sx={{ fontSize: '16px', width: '100%' }}
                />}

                {selectedValue == 'mp3' &&
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
                        <FileInput
                            id='audio'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleFileChange(event, setAudio)}
                            value={audio}
                            description='Carregar arquivo de áudio MP3'
                            icon={<CiMusicNote1 size={22} color='#7750DE' />}
                        />
                    </Box>
                }

                {selectedValue == 'documento' &&
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
                        <FileInput
                            id='document'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleFileChange(event, setDocument)}
                            value={document}
                            description='Carregar um documento'
                            icon={<LuFile size={22} color='#7750DE' />}
                        />
                    </Box>
                }
            </Box>

            {errorMessage && <Typography sx={{ color: '#FF0000', fontWeight: 400, fontSize: 14, marginTop: '10px' }}>
                {errorMessage}
            </Typography>}

            <Button
                onClick={handleClick}
                variant="contained"
                sx={{
                    marginTop: '26px',
                    textTransform: 'none',
                }}>Gerar Questão</Button>
        </Box>
    )
}