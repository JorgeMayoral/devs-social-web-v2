import { URL } from "../utils/constants"

export function createPost(token: string, content: string) {
  return fetch(`${URL}/v1/post/`, {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({body: content})
  }).then(res => {
    return res.json()
  }).then(res => {
    return res
  })
}