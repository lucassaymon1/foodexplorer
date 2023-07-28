import { useContext, createContext, useState, useEffect } from "react";

import { api } from "../services";

const AuthContext = createContext({})

function AuthProvider({ children }) {

  const [data, setData] = useState({})

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      const assignUserAdm = {
        isAdmin: user.isAdmin === 1 ? true : false
      }

      const assignUser = Object.assign(user, assignUserAdm)

      setData({ 
        user: assignUser,
        token
      })

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
      localStorage.setItem("@foodexplorer:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      
    }
    catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      }
      else {
        alert("Não foi possível efetuar o login!")
      }
    }
  }

  function signOut() {

    localStorage.removeItem("@foodexplorer:user")
    localStorage.removeItem("@foodexplorer:token")

    setData({})

  }

  useEffect(() => {

    const user = localStorage.getItem("@foodexplorer:user")
    const token = localStorage.getItem("@foodexplorer:token")

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`

    if (user && token) {
      setData({
        user: JSON.parse(user),
        token
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={
      {
        signIn,
        signOut,
        user: data.user
      }
    }>
      {children}
    </AuthContext.Provider>
  )

}

function useAuth() {

  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }

