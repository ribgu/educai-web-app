import { Role } from './Role'

export type Auth = {
    id: string
	role: Role
    profilePicture?: string
    username: string
    token: string
    updateAuthData: (newToken: string) => void
    setStudentTeacher?: (student: string) => void;
    student: string | undefined
}
