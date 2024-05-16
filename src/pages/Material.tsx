import { Box, Button, FormGroup, InputAdornment, TextField, Typography } from '@mui/material'
import Layout from './Layout'
import CheckBox from '../components/CheckBox/CheckBox'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { RiLink } from 'react-icons/ri'
import { useState } from 'react'
import FileInput from '../components/FileInput/FileInput'
import { CiMusicNote1 } from 'react-icons/ci'

export default function Material() {
    const [file, setFile] = useState<File | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files ? event.target.files[0] : null)
    }

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
                            <CheckBox 
                                label="Instruções" 
                                defaultChecked
                                checked={isChecked}
                                onChange={handleCheckboxChange} 
                            />
                            <CheckBox label="Documento" />
                            <CheckBox label="Link Youtube" />
                            <CheckBox label="MP3" />
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

                    <TextField 
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
                    />

                    <TextField 
                        InputProps={{
                            startAdornment: 
                            <InputAdornment position="start">
                                <RiLink size={22} color='#7750DE'/>
                            </InputAdornment>,
                            sx: { borderRadius: 2 }
                        }}
                        placeholder='Link do Youtube'
                        sx={{ fontSize: '16px', width: '100%' }}
                    />     

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
                        <FileInput 
                            description='Carregar arquivo de áudio MP3' 
                            icon={<CiMusicNote1 size={22} color='#7750DE'/>}
                        />
                    </Box> 
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