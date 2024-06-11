import MicIcon from '@mui/icons-material/Mic'
import StopCircle from '@mui/icons-material/StopCircle'
import LoadingButton from '@mui/lab/LoadingButton'

type TalkButtonProps = {
  recording: boolean
  audioBlobUrl: string | null
  startRecording: () => void
  stopRecording: () => void
  loading: boolean
}

export default function TalkButton(props: TalkButtonProps) {
  const { recording, startRecording, stopRecording, loading } = props

  const onClick = async () => {
    if (recording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  return (
    <LoadingButton
      sx={{ width: '24vw', padding: '16px', borderRadius: '10px', marginTop: '24px'}}
      onClick={onClick}
      color='primary'
      loading={loading}
      variant='contained'
    >
      {recording ? <StopCircle /> : <MicIcon />}
    </LoadingButton>
  )
}
