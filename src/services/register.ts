import { URL } from "../utils/constants"

type RegisterData = {
  username: string
  name: string
  email: string
  password: string
}

export default function register({username, name, email,  password}: RegisterData) {
  return fetch(`${URL}/v1/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({username, name, email, password})
  }).then(res => {
    return res.json()
  }).then(res => {
    const {token} = res
    return token
  })
}