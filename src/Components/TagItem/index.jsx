import { Container } from "./styles"
import { Plus } from "../../icons/Plus"
import { Close } from "../../icons/Close"
import { useState, useEffect, useRef } from "react"

export function TagItem({ isNew, onClick, title, value, ...rest }) {

  if(!isNew){
    return(
      <Container className="tag-item" isNew={isNew}>
          {/* <input
            type="text"
            placeholder="Adicionar"
            value={title}
            {...rest}
          /> */}
          <p>{title}</p>
          <button
            onClick={onClick}
            className={isNew ? "button-add" : "button-delete"}
            type="button"
          >
            {isNew ? <Plus /> : <Close />}
          </button>
        </Container>

    )
  }
  else{
    return (
      <Container isNew={isNew}>
        <input
          type="text"
          value={title}
          placeholder="Adicionar"
          {...rest}
        />
        <button
          onClick={onClick}
          className={isNew ? "button-add" : "button-delete"}
          type="button"
        >
          {isNew ? <Plus /> : <Close />}
        </button>
      </Container>
  
    )

  }

}