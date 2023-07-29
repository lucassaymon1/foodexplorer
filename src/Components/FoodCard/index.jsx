import { Container } from "./styles"
import { Plus } from "../../icons/Plus"
import { Minus } from "../../icons/Minus"
import { Heart } from "../../icons/Heart"
import { Pencil } from "../../icons/Pencil"

import { Button } from "../Button"
import { Quantify } from "../Quantify"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

export function FoodCard({ description, title, price, photo, foodId, admin}) {

  const {user} = useAuth()
  const isAdm = user.isAdmin
  const navigate = useNavigate()
  
  return (
    <Container admin={isAdm ? "true" : undefined}>
      {
        isAdm ?
          <button className="icon" onClick={() => navigate(`/edit/${foodId}`)}>
            <Pencil />

          </button>
          :
          <button className="icon" id="favorite">
            <Heart />

          </button>

      }
      <button className="details-button" onClick={() => navigate(`/details/${foodId}`)}>
        <img src={photo} alt="refeição" />
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <h2>R$ {price}</h2>

      </button>

      {
        isAdm ?
          null
          :

          <div className="quantify-container">
            <div className="quantify">
              <Quantify />
            </div>
            <Button title="incluir" />

          </div>

      }

    </Container>
  )
}