export type Auth = {
    id: string
    token: string
	role: string
    updateAuthData: (newToken: string) => void
}