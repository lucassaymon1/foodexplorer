import { useContext, createContext, useState, useEffect } from "react";
import { useState, useEffect } from "react";

import { api } from "../services";

const AuthContext = createContext({})

function authProvider({ children }) {

  const [data, setData] = useState()

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      setData({ user, token })

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
      localStorage.setItem("@foodexplorer:token", token)

      api.defaults.headers.common["authorization"] = `Bearer${token}`

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

  return (
    <AuthContext.Provider value={
      {
        signIn,
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

export { authProvider, useAuth }

