export type LeaderboardType = {
    id: string,
    name: string,
    score: number,
    profilePicture: string
}[]

export interface LeaderboardsType extends Array<LeaderboardType>{}