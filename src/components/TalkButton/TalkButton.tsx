import { ReactMediaRecorder } from 'react-media-recorder'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import MicIcon from '@mui/icons-material/Mic'
import StopIcon from '@mui/icons-material/Stop'

export default function TalkButton() {
  const [audio, setAudio] = useState<Blob | null>(null)

  useEffect(() => {
    if (audio) {
      console.log('Audio state updated:', audio)
    }
  }, [audio])

  const handleSaveAudio = async (mediaBlobUrl: string, status: string) => {
    console.log(status)
    if (mediaBlobUrl) {
      const response = await fetch(mediaBlobUrl)
      const data = await response.blob()
      setAudio(data)
      console.log('Audio saved:', data)
    }
  }
  return (
    <ReactMediaRecorder
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          {status}
          <Button
            sx={{ width: '24vw', padding: '16px', borderRadius: '10px' }}
            onClick={() => {
              if (status === 'idle' || status === 'stopped') {
                console.log(status, 'if')
                startRecording()
              } else {
                console.log(status, 'else')
                stopRecording()
                console.log(status, 'else, after stop')
                if (mediaBlobUrl) {
                  handleSaveAudio(mediaBlobUrl, status)
                }
              }
            }}
            color={status === 'recording' ? 'error' : 'primary'}
            variant='contained'
          >
            {status === 'recording' ? <StopIcon /> : <MicIcon />}
          </Button>
          {audio && (
            <audio
              controls
              src={URL.createObjectURL(audio)}
            />
          )}
        </div>
      )}
    />
  )
}
