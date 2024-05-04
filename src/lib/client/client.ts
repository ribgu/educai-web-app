import axios, { AxiosInstance } from 'axios'
import { UserLogin } from '../types/Login'

type ClientProps = {
  clientType: 'ia-api' | 'api',
  clientToken: string
}

export default class Client {
  private axios: AxiosInstance
  private clientProps: ClientProps

  constructor(clientProps: ClientProps) {
    this.clientProps = clientProps
    this.axios = axios.create({
      baseURL: this.clientProps.clientType === 'ia-api' ? import.meta.env.VITE_API_URL_IA : import.meta.env.VITE_API_URL,
      withCredentials: true
    })

    this.axios.interceptors.request.use((config) => {
      if(!config.url?.includes('user/auth')) {
        config.headers.Authorization = this.clientProps.clientToken
      }

      return config 
    })  
  }

  async login(
    body: UserLogin 
  ): Promise<{token: string}> {
    return (await this.axios.post('user/auth', body)).data
  }

  async getUserClassrooms() {
    return (await this.axios.get('/user/classrooms')).data
  }

  // outros métodos vcs devem criar um tipo na pasta types, copiem o UserLogin e alterem conforme a necessidade

}
