import { Role } from './Role'

export type Auth = {
    id: string
	role: Role
    username: string
    updateAuthData: (newToken: string) => void
    getToken: () => string
}