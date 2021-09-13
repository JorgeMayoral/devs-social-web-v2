export type LoggedUser = {
  name: string
  username: string
  email: string
  _id: string,
  following: string[]
  followers: string[]
  posts: string[]
  likedPosts: string[]
  createdAt: string
  updatedAt: string
  __v: number
}