import { LIMIT, URL } from "../utils/constants"

export function getAllPosts(offset: number) {
  return fetch(`${URL}/v1/post/all?offset=${offset}&limit=${LIMIT}`, {
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