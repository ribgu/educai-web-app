export type Auth = {
    id: string
	role: 'STUDENT' | 'TEACHER'
    updateAuthData: (newToken: string) => void
    getToken: () => string
}