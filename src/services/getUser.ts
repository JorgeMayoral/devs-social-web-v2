import { URL } from "../utils/constants"

export function getUser(id: string) {
  return fetch(`${URL}/v1/user/${id}`, {
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