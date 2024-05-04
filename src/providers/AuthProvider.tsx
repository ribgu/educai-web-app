import { jwtDecode } from "jwt-decode"
import { ReactNode, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { JwtDecoded } from '../lib/types/JwtDecoded'

interface Props {
	children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
	const [id, setId] = useState('')
	const [token, setToken] = useState('')
	const [role, setRole] = useState('')

	const updateAuthData = (newToken: string) => {
		const tokenDecoded = getTokenDecoded(newToken)

		setId(tokenDecoded.id)
		setToken(newToken)
		setRole(tokenDecoded.role)
	}

	const getTokenDecoded = (tokenEncoded: string): JwtDecoded => {
		return jwtDecode(tokenEncoded)
	}

	return (
		<AuthContext.Provider value={{ id, token, role, updateAuthData }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
