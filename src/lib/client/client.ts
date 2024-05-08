import axios, { AxiosInstance } from 'axios'
import { UserLogin } from '../types/Login'
import { EduResponse } from '../types/EduResponse'

type ClientType = 'ia-api' | 'api'

export default class Client {
  private axios: AxiosInstance
  private clientType: ClientType

  constructor(clientType: ClientType) {
    this.clientType = clientType
    this.axios = axios.create({
      baseURL: this.clientType === 'ia-api' ? import.meta.env.VITE_API_URL_IA : import.meta.env.VITE_API_URL,
      withCredentials: true
    })
  }

  async login(
    body: UserLogin
  ) {
    return (await this.axios.get('login', { data: body })).data
  }

  async transcribe(
    audioBuffer: ArrayBuffer,
    fileName: string
  ) {
    const formData = new FormData()
    const audioBlob = new Blob([audioBuffer], { type: 'audio/mp3' })
    formData.append('file', audioBlob, fileName)
    return (await this.axios.post('transcription', formData))
  }

  async getResponse(
    question: string
  ): Promise<EduResponse>{
    const request = await this.axios.post('edu-response', { question } )
    console.log(request)
    return request.data
  }

  // outros métodos vcs devem criar um tipo na pasta types, copiem o UserLogin e alterem conforme a necessidade

}
