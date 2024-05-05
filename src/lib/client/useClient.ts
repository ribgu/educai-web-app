import { AuthContext } from '../../contexts/AuthContext'
import Client from './client'
import { useContext } from 'react'

const useClient = () => {
    const { getToken } = useContext(AuthContext)
    const client = new Client({clientType: 'api', clientToken: getToken()})
    return client
}

export default useClient
