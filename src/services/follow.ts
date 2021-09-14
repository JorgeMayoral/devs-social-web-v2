import { URL } from "../utils/constants"

export default function follow(token: string, id: string) {
  return fetch(`${URL}/v1/user/${id}/follow`, {
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