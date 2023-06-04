import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignUp } from "../Pages/SignUp"
import { SignIn } from "../Pages/SignIn"

export function AuthRoutes() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}