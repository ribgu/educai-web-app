import { AuthContext } from '../../contexts/AuthContext'
import Client from './client'
import { useContext } from 'react'

const useClient = () => {
    const { token } = useContext(AuthContext)
    const client = new Client({clientType: 'api', clientToken: token})
    return client
}

export default useClient
