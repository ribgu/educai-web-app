export type JwtDecoded = {
	iss: string,
	id: string,
	role: 'TEACHER' | 'STUDENT',
	exp: Date
}