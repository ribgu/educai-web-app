/* eslint-disable react-hooks/exhaustive-deps */
import { jwtDecode } from 'jwt-decode'
import { ReactNode, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { JwtDecoded } from '../lib/types/JwtDecoded'
import { Role } from '../lib/types/Role'
import { useNavigate } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import useClient from '../lib/client/useClient'

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
	const navigate = useNavigate()
	const client = useClient()

	const updateAuthData = (newToken: string) => {
		const tokenDecoded = getTokenDecoded(newToken)

		setId(tokenDecoded.id)
		setRole(tokenDecoded.role)
		setToken(newToken)
		setUsername(tokenDecoded.username)
		sessionStorage.setItem('token', newToken)
	}

	useEffect(() => {
		if (!token) {
			client.refreshToken().then(response => {
				updateAuthData(response.data.token)
			}).catch(() => {
				navigate('/login')
			})
		} else {
			updateAuthData(token)
		}
	}, [token])

	return (
		<AuthContext.Provider value={{ id, role, username, token, updateAuthData }}>
			{token !== '' ? 
				children 
				: 
				<Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<CircularProgress color='primary' size={70} thickness={5}/>
				</Box>
			}
		</AuthContext.Provider>
	)
}

export default AuthProvider
