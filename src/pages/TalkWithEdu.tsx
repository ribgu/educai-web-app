import Box from '@mui/material/Box/Box'
import Layout from './Layout'
import PageHeader from '../components/PageHeader/PageHeader'
import TalkButton from '../components/TalkButton/TalkButton'
import { useAudioRecorder } from '../lib/useAudioRecorder'
import useAiClient from '../lib/client/useAIClient'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function TalkWithEdu() {
  const { recording, audioBlobUrl, startRecording, stopRecording } = useAudioRecorder()
  const [transcription, setTranscription] = useState<string>('')
  const [response, setResponse] = useState<string>()
  const client = useAiClient()
  console.log(transcription)

  const handleSendAudioToEdu = async () => {
    if (audioBlobUrl) {
      console.log('Sending audio to Edu')
      const audioBuffer = await fetch(audioBlobUrl).then(response => response.arrayBuffer())
      const fileName = uuidv4() + '.mp3'
      const transcribeResponse = await client.transcribe(audioBuffer, fileName)
      setTranscription(transcribeResponse.data.text)
      const eduResponse = await client.getResponse(transcribeResponse.data.text)
      console.log(eduResponse.response)
      setResponse(eduResponse.response)
    }
  }

  return (
    <Layout>
      <Box sx={{ width: '100%' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <PageHeader title='Falando com o Edu' />
        </Box>
        <Box sx={{ width: '100%', height: '89%', display: 'flex', padding: '24px', flexDirection: 'column'}}>
          <Box sx={{ width: '100%', height: '80%'}}>
            {response && (
              <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p>{response}</p>
              </Box>
            )}
          </Box>
          <Box sx={{ width: '100%', height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <TalkButton
              recording={recording || false}
              audioBlobUrl={audioBlobUrl}
              startRecording={startRecording}
              stopRecording={stopRecording}
              handleSendAudioToEdu={handleSendAudioToEdu}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

