import { useReactMediaRecorder } from 'react-media-recorder'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import MicIcon from '@mui/icons-material/Mic'
import StopIcon from '@mui/icons-material/Stop'

export default function TalkButton() {
  const [audio, setAudio] = useState<string | null>(null)

  const AudioRecorder = () => {
    const {
      status,
      startRecording,
      stopRecording,
      mediaBlobUrl
    } = useReactMediaRecorder({ audio: true })

    useEffect(() => {
      if (status === 'stopped') {
        setAudio(mediaBlobUrl ?? null)
      }
    }, [status, mediaBlobUrl])

    const handleStartRecording = () => {
      if (status === 'idle') {
        startRecording()
      }
      if (status === 'recording') {
        stopRecording()
      }
      if (status === 'stopped') {
        setAudio(null)
        startRecording()
      }
    }

    return (
      <Button
        sx={{ width: '24vw', padding: '16px', borderRadius: '10px' }}
        onClick={status === 'recording' ? stopRecording : handleStartRecording}
        color={status === 'recording' ? 'error' : 'primary'}
        variant='contained'
      >
        {status === 'recording' ? <StopIcon /> : <MicIcon />}
      </Button>
    )

  }
}
