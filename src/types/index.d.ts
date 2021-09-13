export type ProviderProps = {
  children: JSX.Element;
};

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

export type Post = {
  likes: string[]
  totalLikes: number
  isComment: boolean
  comments: string[]
  body: string
  authorId: string
  authorUsername: string
  authorName: string
  createdAt: strign
  updatedAt: strign
  __v: number
  id: string
}