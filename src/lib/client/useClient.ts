import Client from './client'

const useClient = () => {
    const client = new Client('api')
    return client
}

export default useClient
