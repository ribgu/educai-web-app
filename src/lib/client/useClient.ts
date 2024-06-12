import { AuthContext } from '../../contexts/AuthContext'
import Client from './client'
import { useContext } from 'react'

const useClient = () => {
    const { token, updateAuthData } = useContext(AuthContext)
    const client = new Client({clientType: 'api', clientToken: token, updateAuthData})
    return client
}

export default useClient
