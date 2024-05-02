import { ReactMediaRecorder } from 'react-media-recorder'
import { useState } from 'react'
import Button from '@mui/material/Button'
import MicIcon from '@mui/icons-material/Mic'
import StopIcon from '@mui/icons-material/Stop'

export default function TalkButton() {
  const [audio, setAudio] = useState<Blob | null>(null)
  console.log(audio)

  const handleSaveAudio = async (mediaBlobUrl: string) => {
    console.log(mediaBlobUrl)
    const response = await fetch(mediaBlobUrl)
    const data = await response.blob()
    setAudio(data)
    console.log(data)
  }

  return (
    <ReactMediaRecorder
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <Button
            sx={{ width: '24vw', padding: '16px', borderRadius: '10px' }}
            onClick={() => {
              if (status === 'recording') {
                console.log('stop')
                stopRecording()
                console.log(mediaBlobUrl)
                if (mediaBlobUrl) {
                  console.log('saving')
                  handleSaveAudio(mediaBlobUrl)
                }
              } else {
                console.log('start')
                startRecording()
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
