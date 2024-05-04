import { createContext } from 'react'
import { Auth } from '../lib/types/AuthContext'

export const AuthContext = createContext<Auth>({
	id: '',
	token: '',
	role: '',
	updateAuthData: function (): void {
		throw new Error('Function not implemented.')
	}
})