import { useCallback, useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import loginService from '../services/login';

export function useUser() {
  const {user, setUser, token, setToken} = useContext(UserContext)
  const [state, setState] = useState({loading: false})

  const login = useCallback(({username, password}) => {
    setState({loading: true})

    loginService({username, password}).then(token => {
      sessionStorage.setItem('devs-social-token', token)
      setState({loading: false})
      setToken!(token)
    }).catch(err => {
      sessionStorage.removeItem('devs-social-toke')
      setState({loading: false})
      console.error(err)
    })
  }, [setToken])

  return {login, isLogged: Boolean(token), isLoginLoading: state.loading}
}