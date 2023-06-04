import React from "react"

import { Container } from "./styles"
import { Receipt } from "../../icons/Receipt.jsx"
import { Search } from "../../icons/Search"
import { Input } from "../../Components/Input"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export function Header() {
  const [menuState, setMenuState] = useState(false)
  const isAdm = true
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.pathname)

  function handleToggleMenu() {
    setMenuState(!menuState)
  }
  function handleNew() {
    const route = location.pathname
    if (route === "/new") {
      handleToggleMenu()
    }
    else {
      navigate("/new")
    }
  }
  return (
    <Container isAdm={isAdm}>

      <div className="header">
        <button className="hamburger" onClick={handleToggleMenu}>
          <span className={menuState ? "bar-before before-active" : "bar-before"}></span>
          <span className={menuState ? "bar bar-inactive" : "bar"}></span>
          <span className={menuState ? "bar-after after-active" : "bar-after"}></span>
        </button>

        <div className="logo-container">
          <h1 className={menuState ? "menu-heading" : undefined}>Menu</h1>
          <div className={menuState ? "logo logo-inactive" : "logo"}>
            <img src="src/icons/ExplorerIcon.svg" alt="Logomarca da Food Explorer" />
            <h1>food explorer</h1>
            {
              isAdm &&
              <p>admin</p>
            }

          </div>

        </div>

        {
          isAdm ?
            null
            :
            <div className="popup-icon">
              <p className="popup">0</p>
              <Receipt />

            </div>

        }

      </div>

      <div className={menuState ? "menu menu-active" : "menu menu-inactive"}>
        <Input placeholder="Busque por pratos ou ingredientes" type="text" icon={Search} />
        <ul>
          <li>
            <button onClick={handleNew}>Novo prato</button>
          </li>
          <li>
            <button>Sair</button>
          </li>
        </ul>
      </div>

    </Container>
  )
}