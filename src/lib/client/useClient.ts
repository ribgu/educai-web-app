import Client from './client'

const useClient = (clientToken: string = '') => {
    const client = new Client({clientType: 'api', clientToken})
    return client
}

export default useClient
