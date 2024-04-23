import axios, { AxiosInstance } from 'axios'
import { UserLogin } from '../types/Login'

type ClientType = 'ia-api' | 'api'

export default class Client {
  private axios: AxiosInstance
  private clientType: ClientType

  constructor(clientType: ClientType) {
    this.clientType = clientType
    this.axios = axios.create({
      baseURL: this.clientType === 'ia-api' ? import.meta.env.API_URL_IA : import.meta.env.API_URL,
      withCredentials: true
    })
  }

  async login(
    params: UserLogin
  ) {
    return (await this.axios.get('login', { params })).data
  }

  // outros métodos vcs devem criar um tipo na pasta types, copiem o UserLogin e alterem conforme a necessidade

}
