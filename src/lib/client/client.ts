import axios, { AxiosInstance } from 'axios'
import { UserLogin } from '../types/Login'

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

  // outros métodos vcs devem criar um tipo na pasta types, copiem o UserLogin e alterem conforme a necessidade

}
