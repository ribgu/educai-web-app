import Box from '@mui/material/Box/Box'
import Layout from './Layout'
import PageHeader from '../components/PageHeader/PageHeader'
import TalkButton from '../components/TalkButton/TalkButton'
import { useAudioRecorder } from '../lib/useAudioRecorder'
import { useAudioTranscriber } from '../lib/useAudioTranscriber'

export default function TalkWithEdu() {
  const { recording, audioBlobUrl, startRecording, stopRecording } = useAudioRecorder()
  const { transcription, transcribeAudio, isLoading, error } = useAudioTranscriber()

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
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
