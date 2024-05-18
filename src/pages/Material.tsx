import { Box, Button, FormGroup, InputAdornment, TextField, Typography } from '@mui/material'
import Layout from './Layout'
import CheckBox from '../components/CheckBox/CheckBox'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { RiLink } from 'react-icons/ri'
import { useState } from 'react'
import FileInput from '../components/FileInput/FileInput'
import { CiMusicNote1 } from 'react-icons/ci'
import { LuFile } from 'react-icons/lu'

export default function Material() {
    const [file, setFile] = useState<File | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files ? event.target.files[0] : null)
    }

    const [instrucoesIsChecked, setInstrucoesIsChecked] = useState(true)
    const [documentoIsChecked, setDocumentoIsChecked] = useState(false)
    const [linkYoutubeIsChecked, setLinkYoutubeIsChecked] = useState(false)
    const [mp3IsChecked, setMp3IsChecked] = useState(false)

    return (
        <Layout>
            <Box sx={{ width: '100%', padding: '25px 100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <img src="./Illustration/Edu-Robot.svg" alt="Robo do Educ.AI" />
                    <Box sx={{ width: '80%', display: 'flex', justifyItems: 'center', alignItems: 'center', 
                        backgroundColor: '#F5F5F5', border: '1px solid #E2E2E2', borderRadius: '10px', padding: '15px' }}>
                        <Typography sx={{ color: '#5E5E5E', fontWeight: 700, fontSize: 14 }}>
                            Quais tipos de entradas você fornecerá para a criação do material didático?
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{padding: '20px', marginTop: '12px'}}>
                    <Typography sx={{ color: '#545454', fontWeight: 400, fontSize: 12, marginBottom: '6px' }}>
                        Escolha uma ou mais entradas:
                    </Typography>

                    <FormGroup>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <CheckBox checked={instrucoesIsChecked} setChecked={setInstrucoesIsChecked} label="Instruções" />
                            <CheckBox checked={linkYoutubeIsChecked} setChecked={setLinkYoutubeIsChecked} label="Link Youtube" />
                            <CheckBox checked={mp3IsChecked} setChecked={setMp3IsChecked} label="MP3" />
                            <CheckBox checked={documentoIsChecked} setChecked={setDocumentoIsChecked} label="Documento" />
                        </Box>
                    </FormGroup>
                </Box>

                <Box sx={{ 
                    padding: '20px 120px',
                    border: '1px solid #DADADA', 
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <Typography sx={{ color: '#545454', fontWeight: 600, fontSize: 16, marginBottom: '6px' }}>
                        Entradas
                    </Typography>

                    {instrucoesIsChecked && <TextField 
                        multiline
                        rows={3}
                        InputProps={{
                            startAdornment: 
                            <InputAdornment position="start" sx={{ marginBottom: 'auto', marginTop: '10px' }}>
                                <IoChatbubblesOutline size={22} color='#7750DE'/>
                            </InputAdornment>,
                            sx: { borderRadius: 2 }
                        }}
                        placeholder='Escreva instruções'
                        sx={{ fontSize: '16px', width: '100%' }}
                    />}

                    {linkYoutubeIsChecked && <TextField 
                        InputProps={{
                            startAdornment: 
                            <InputAdornment position="start">
                                <RiLink size={22} color='#7750DE'/>
                            </InputAdornment>,
                            sx: { borderRadius: 2 }
                        }}
                        placeholder='Link do Youtube'
                        sx={{ fontSize: '16px', width: '100%' }}
                    /> }    

                    {mp3IsChecked && 
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
                            <FileInput 
                                description='Carregar arquivo de áudio MP3' 
                                icon={<CiMusicNote1 size={22} color='#7750DE'/>}
                            />
                        </Box>
                    }

                    {documentoIsChecked && 
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
                            <FileInput 
                                description='Carregar um documento' 
                                icon={<LuFile size={22} color='#7750DE'/>}
                            />
                        </Box>
                    }
                </Box>

                <Button 
                    variant="contained" 
                    sx={{ 
                        width: '70%', 
                        marginTop: '26px',
                        textTransform: 'none',
                    }}>Gerar Material Didático</Button>
            </Box>
        </Layout>
    )
}