import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Client from './client'

const useClient = () => {
    const { token } = useContext(AuthContext)
    const client = new Client({clientType: 'ia-api', clientToken: token})
    return client
}

export default useClient
