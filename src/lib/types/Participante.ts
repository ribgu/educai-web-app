export type Participante = {
    id: string,
    name: string,
    email: string,
    role: 'TEACHER' | 'STUDENT'
}

export interface Participantes extends Array<Participante>{}