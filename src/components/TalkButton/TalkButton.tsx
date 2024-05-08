import Button from '@mui/material/Button'
import MicIcon from '@mui/icons-material/Mic'
import StopCircle from '@mui/icons-material/StopCircle'

type TalkButtonProps = {
  recording: boolean
  audioBlobUrl: string | null
  startRecording: () => void
  stopRecording: () => void
  handleSendAudioToEdu: () => void
}

export default function TalkButton(props: TalkButtonProps) {
  const { recording, startRecording, stopRecording, handleSendAudioToEdu } = props

  const onClick = async () => {
    console.log(recording)
    if (recording) {
      stopRecording()
      handleSendAudioToEdu()
    } else {
      startRecording()
    }
  }

  const automaticClick = () => {
    onClick()
    onClick()
  }

  return (
    <Button
      onLoad={automaticClick}
      sx={{ width: '24vw', padding: '16px', borderRadius: '10px', marginTop: '24px'}}
      onClick={onClick}
      color='primary'
      variant='contained'
    >
      {recording ? <StopCircle /> : <MicIcon />}
    </Button>
  )
}
