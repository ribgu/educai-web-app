import Client from './client'

const useClient = () => {
    const client = new Client('ia-api')
    return client
}

export default useClient
