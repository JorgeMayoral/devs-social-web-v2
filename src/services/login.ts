type LoginData = {
  username: string
  password: string
}

export default function login({username, password}: LoginData) {
  return fetch(`/v1/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({username, password})
  }).then(res => {
    return res.json()
  }).then(res => {
    const {token} = res
    return token
  })
}