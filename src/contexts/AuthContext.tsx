import { createContext } from 'react'
import { Auth } from '../lib/types/AuthContext'

export const AuthContext = createContext<Auth>({
	id: '',
	role: 'STUDENT',
	username: '',
	profilePicture: '',
	token: '',
	updateAuthData: function (): void {
		throw new Error('Function not implemented.')
	},
})
