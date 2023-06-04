import { useState } from 'react'
import { SignIn } from './Pages/SignIn'
import { Home } from "./Pages/Home"
import { SignUp } from "./Pages/SignUp"
import { Details } from "./Pages/Details"
import { New } from "./Pages/New"
import { Edit } from "./Pages/Edit"
import '../styles/global.js'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <Details />
  )
}
