import { jwtDecode } from 'jwt-decode'
import { ReactNode, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { JwtDecoded } from '../lib/types/JwtDecoded'
import { Role } from '../lib/types/Role'

interface Props {
	children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
	const getTokenDecoded = (tokenEncoded: string): JwtDecoded => {
		return jwtDecode(tokenEncoded)
	}

	const [token, setToken] = useState(sessionStorage.getItem('token') ?? '')
	const tokenDecoded = token ? getTokenDecoded(token) : {} as JwtDecoded
	const [id, setId] = useState(tokenDecoded?.id ?? '')
	const [username, setUsername] = useState(tokenDecoded?.username ?? '')
	const [role, setRole] = useState<Role>(tokenDecoded?.role ?? '')

	const updateAuthData = (newToken: string) => {
		const tokenDecoded = getTokenDecoded(newToken)

		setId(tokenDecoded.id)
		setRole(tokenDecoded.role)
		setToken(newToken)
		setUsername(tokenDecoded.username)
		sessionStorage.setItem('token', newToken)
	}

	return (
		<AuthContext.Provider value={{ id, role, username, token, updateAuthData }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
