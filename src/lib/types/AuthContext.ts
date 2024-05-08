import { Role } from './Role'

export type Auth = {
    id: string
	role: Role
    username: string
    token: string
    updateAuthData: (newToken: string) => void
}