import { useState, useEffect } from 'react'

type MediaRecorderType = MediaRecorder | null

export const useAudioRecorder = () => {
  const [recording, setRecording] = useState<boolean>(false)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorderType>(null)
  const [audioBlobUrl, setAudioBlobUrl] = useState<string | null>(null)

  useEffect(() => {
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        const recorder = new MediaRecorder(stream)
        let audioChunks: BlobPart[] = []

        recorder.ondataavailable = event => {
          audioChunks.push(event.data)
        }

        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' })
          const audioUrl = URL.createObjectURL(audioBlob)
          setAudioBlobUrl(audioUrl)
          audioChunks = []
        }

        setMediaRecorder(recorder)
      } catch (error) {
        console.error('Error accessing microphone:', error)
      }
    }

    getMedia()

    return () => {
      if (mediaRecorder) {
        mediaRecorder.stream.getTracks().forEach(track => track.stop())
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  // Se eu não passar um array vazio, o useEffect vai ser executado toda vez que o componente for renderizado

  const startRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start()
    }
    setRecording(true)
  }

  const stopRecording = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.stop()
      setRecording(false)
    }
  }

  return {
    recording,
    audioBlobUrl,
    startRecording,
    stopRecording
  }
}
