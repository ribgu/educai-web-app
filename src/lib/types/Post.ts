export type PostType = {
    id: string
    title: string
    description: string
    url: string
    datePosting: string
  }
  
export interface PostsType extends Array<PostType> {}
  