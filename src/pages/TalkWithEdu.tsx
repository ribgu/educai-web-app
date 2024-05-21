import Box from '@mui/material/Box/Box'
import Layout from './Layout'
import PageHeader from '../components/PageHeader/PageHeader'
import TalkButton from '../components/TalkButton/TalkButton'
import { useAudioRecorder } from '../lib/useAudioRecorder'
import useAiClient from '../lib/client/useAIClient'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Typography } from '@mui/material'

type Messages = {
  message: string
  isUser: boolean
}

export default function TalkWithEdu() {
  const { recording, audioBlobUrl, startRecording, stopRecording } = useAudioRecorder()
  const [transcription, setTranscription] = useState<string>('')
  const [response, setResponse] = useState<string>()
  const client = useAiClient()
  const [messages, setMessages] = useState<Messages[]>([])

  const handleSendAudioToEdu = async () => {
    setResponse('')
    if (audioBlobUrl) {
      console.log('Sending audio to Edu')
      const audioBuffer = await fetch(audioBlobUrl).then(response => response.arrayBuffer())
      const fileName = uuidv4() + '.mp3'
      const transcribeResponse = await client.transcribe(audioBuffer, fileName)
      setTranscription(transcribeResponse.data.text)
      const eduResponse = await client.getResponse(transcribeResponse.data.text)
      setResponse(eduResponse.response)
    }
  }

  useEffect(() => {
    if (audioBlobUrl) {
      handleSendAudioToEdu()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioBlobUrl])

  useEffect(() => {
    if (transcription && !messages.some(msg => msg.message === transcription && msg.isUser)) {
      setMessages([...messages, { message: transcription, isUser: true }])
    }
    if (response) {
      setMessages([...messages, { message: response, isUser: false }])
    }
  }, [transcription, response])

  return (
    <Layout>
      <Box sx={{ width: '100%' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <PageHeader title='Falando com o Edu' />
        </Box>
        <Box sx={{ width: '100%', height: '89%', display: 'flex', padding: '24px', flexDirection: 'column'}}>
          <Box sx={{ width: '100%', height: '80%', overflowY: 'scroll'}}>
            {messages.map((message, index) => (
              <Box key={index}
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                  marginBottom: '8px'
                  }}>
                <Box
                  sx={{
                    width: '50%',
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: message.isUser ? '#DED1FF' : '#6730EC',
                    color: message.isUser ? 'black' : 'white'
                    }}>
                  <Typography variant='body1'>
                    {message.message}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={{ width: '100%', height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <TalkButton
              recording={recording || false}
              audioBlobUrl={audioBlobUrl}
              startRecording={startRecording}
              stopRecording={stopRecording}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

