import { useCallback, useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import loginService from '../services/login';
import registerService from "../services/register";
import followService from "../services/follow";

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
      sessionStorage.removeItem('devs-social-token')
      setState({loading: false})
      console.error(err)
    })
  }, [setToken])

  const logout = useCallback(() => {
    sessionStorage.removeItem('devs-social-token')
    setToken!(null)
  }, [setToken])

  const register = useCallback(({username, name, email, password}) => {
    setState({loading: true})

    registerService({username, name, email, password}).then(token => {
      sessionStorage.setItem('devs-social-token', token)
      setState({loading: false})
      setToken!(token)
    }).catch(err => {
      sessionStorage.removeItem('devs-social-token')
      setState({loading: false})
      console.error(err)
    })
  }, [setToken])

  const follow = useCallback(({id}) => {
    followService(token!, id).then(() => {
      const updatedUser = user!

      if (updatedUser.following.includes(id)) {
        updatedUser.following.filter(followId => followId !== id)
      } else {
        updatedUser.following.push(id)
      }

      setUser!(updatedUser)
    }).catch(err => {
      console.error(err)
    })
  }, [setUser, token, user])

  return {login, logout, register, follow, isLogged: Boolean(token), isLoginLoading: state.loading}
}