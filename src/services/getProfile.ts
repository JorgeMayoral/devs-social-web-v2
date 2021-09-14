import { URL } from "../utils/constants"

export function getProfile(token: string) {
  return fetch(`${URL}/v1/user/profile`, {
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