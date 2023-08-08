import React from "react"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

import { Container } from "./styles"
import { Receipt } from "../../icons/Receipt.jsx"
import { Search } from "../../icons/Search"
import { SignOut } from "../../icons/SignOut"

import { Input } from "../../Components/Input"
import { Button } from "../Button"
import { ButtonText } from "../ButtonText"

import { useAuth } from "../../hooks/auth"

import ExplorerIcon from "../../icons/ExplorerIcon.svg"

export function Header({value, onChange}) {
  const {user, signOut} = useAuth()
  const isAdm = user.isAdmin

  const [menuState, setMenuState] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function handleSignOut(){
    const logOut = confirm("Tem certeza que deseja sair?")
    if(logOut){
      navigate("/")
      signOut()
    }
  }

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
    <Container admin={isAdm ? "true" : undefined}>

      <div className="header">
        <button className="hamburger" onClick={handleToggleMenu}>
          <span className={menuState ? "bar-before before-active" : "bar-before"}></span>
          <span className={menuState ? "bar bar-inactive" : "bar"}></span>
          <span className={menuState ? "bar-after after-active" : "bar-after"}></span>
        </button>

        <div className="logo-container">
          <h1 className={menuState ? "menu-heading" : undefined}>Menu</h1>
          <div className={menuState ? "logo logo-inactive" : "logo"}>
            <button onClick={() => navigate("/")} className="home-button">
              <div className="heading-container">
                <img src={ExplorerIcon} alt="Logomarca da Food Explorer" />
                <h1>food explorer</h1>

              </div>
            </button>
            {
              isAdm &&
              <p>admin</p>
            }


          </div>

        </div>
        <div className="header-input-container">
          <Input
            className="desktop-input" 
            placeholder="Busque por pratos ou ingredientes" 
            type="text" 
            icon={Search} 
            onChange={onChange} 
            value={value}
          />

        </div>

        <div className="headerButtonContainer">
          {
            isAdm ?
              <Button onClick={() => navigate("/new")} className="desktop-button" title="Novo prato" />
              :
              <Button className="desktop-button" title="Meus Pedidos (0)" icon={Receipt} />

          }

        </div>

        
        <button onClick={handleSignOut} className="signOut">
           <SignOut/>

        </button>

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
        <Input placeholder="Busque por pratos ou ingredientes" type="text" icon={Search} value={value} onChange={onChange} />
        <ul>
          {
            isAdm &&
            <li>
              <button onClick={handleNew}>Novo prato</button>
            </li>
          }
          <li>
            <button onClick={handleSignOut}>Sair</button>
          </li>
        </ul>
      </div>

    </Container>
  )
}