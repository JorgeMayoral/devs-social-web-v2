import { LIMIT } from "../utils/constants"

export function getUserPosts(id: string, offset: number) {
  return fetch(`/v1/post/user/${id}?offset=${offset}&limit=${LIMIT}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    }
  }).then(res => {
    return res.json()
  }).then(res => {
    return res
  })
}