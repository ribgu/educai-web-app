import { Role } from './Role'

export type Auth = {
    id: string
	role: Role
    updateAuthData: (newToken: string) => void
    getToken: () => string
}