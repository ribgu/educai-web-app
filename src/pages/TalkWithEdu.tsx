import Box from '@mui/material/Box/Box'
import Layout from './Layout'
import PageHeader from '../components/PageHeader/PageHeader'
import TalkButton from '../components/TalkButton/TalkButton'
import { useAudioRecorder } from '../lib/useAudioRecorder'
import Button from '@mui/material/Button'

export default function TalkWithEdu() {
  const { recording, audioBlobUrl, startRecording, stopRecording } = useAudioRecorder()

  // const speechClient = new v2.SpeechClient({
  //   credentials: {
  //     client_email: 'my@project.iam.gserviceaccount.com',
  //     private_key: '***&&&'
  //   },
  //   projectId: 'my-project-id'
  // })

  // const transcribeAudio = async (audioBlobUrl: string) => {
  //   const arrayBuffer = await fetch(audioBlobUrl).then(response => response.arrayBuffer())
  //   const unit8Array = new Uint8Array(arrayBuffer)
  //   // try {
  //   //   const [response] = await client.recognize({ content: unit8Array })
  //   //   const transcription = response.results?.map(result => {
  //   //     if (!result.alternatives) return ''
  //   //     return result.alternatives[0].transcript
  //   //   }).join('\n')
  //   //   return transcription
  //   // }
  //   // catch (error) {
  //   //   console.error('Error transcribing audio:', error)
  //   // }
  // }

  const handleTranscription = async () => {
    if (audioBlobUrl) {
      // await transcribeAudio(audioBlobUrl).then(transcription => {
      //   console.log(transcription)
      // })
      console.log(audioBlobUrl)
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
          </Box>
          <Box sx={{ width: '100%', height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <TalkButton
              recording={recording}
              audioBlobUrl={audioBlobUrl}
              startRecording={startRecording}
              stopRecording={stopRecording}
            />
            <Button onClick={handleTranscription}>Transcrever</Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
