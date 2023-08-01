import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth"

import { AdmRoutes } from "./adm.routes"
import { UserRoutes } from "./user.routes"
import { AuthRoutes } from "./auth.routes"

import ScrollToTop from "../Components/ScrollToTop";

const AppRoutes = ({user}) => {
  const isAdm = user.isAdmin
  return(
    isAdm ? <AdmRoutes/> : <UserRoutes/>
  )
}
export function Routes() {
  const { user } = useAuth()
  return (
    <BrowserRouter>
      <ScrollToTop/>
      {user ? <AppRoutes user={user}/> : <AuthRoutes />}
    </BrowserRouter>
  )
}