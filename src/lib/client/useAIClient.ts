import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Client from './client'

const useClient = () => {
    const { token, updateAuthData } = useContext(AuthContext)
    const client = new Client({clientType: 'ia-api', clientToken: token, updateAuthData})
    return client
}

export default useClient
