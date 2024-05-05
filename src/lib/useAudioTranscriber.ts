import axios from 'axios'
import { useState } from 'react'

export const useAudioTranscriber = () => {
  const [transcription, setTranscription] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const transcribeAudio = async (audioBlobUrl: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const audioBlob = await fetch(audioBlobUrl).then(res => res.blob())
      const audioFile = new File([audioBlob], "recording.mp3", { type: 'audio/mpeg' })
      const formData = new FormData()
      formData.append('file', audioFile)

      // aq vamos fz a requisição para a API de transcrição do Google Cloud usando axios
      const response = await axios.post('url-da-api', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setTranscription(response.data) // Ajuste esta linha conforme o formato da resposta da API
    } catch (error) {
      setError('Failed to transcribe audio: ' + error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    transcription,
    transcribeAudio,
    isLoading,
    error
  }
}
