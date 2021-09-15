import { URL } from "../utils/constants"

export default function likePost(token: string, id: string) {
  return fetch(`${URL}/v1/post/${id}/like`, {
    method: 'PUT',
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