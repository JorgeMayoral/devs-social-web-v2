import { LIMIT, URL } from "../utils/constants"

export function getTimeline(token: string, offset: number) {
  return fetch(`${URL}/v1/post/timeline?offset=${offset}&limit=${LIMIT}`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }
  }).then(res => {
    return res.json()
  }).then(res => {
    return res
  })
}