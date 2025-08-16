import { Container } from "./styles";
import { Minus } from "../../icons/Minus";
import { Plus } from "../../icons/Plus";
import { useState, useEffect } from "react";

export function Quantify({ value = 1, onChange, ...rest }) {

  const [isHigherThan, setIsHigherThan] = useState(false)

  useEffect(() => {

    onChange(value)

  }, [value, onChange])

  function handleMinus(){

    if (value <= 1) return
    if (value <= 10) setIsHigherThan(false)

    onChange(value - 1)
  }

  function handlePLus(){
    onChange(value + 1)

    if(value >= 9){
      setIsHigherThan(true)
    }
  }

  return (
    <Container {...rest}>
      {
        value &&
        <>
          <button type="button" onClick={handleMinus}>
            <Minus />

          </button>
          <h3>{ isHigherThan ? `${value}` : `0${value}`}</h3>
          <button type="button" onClick={handlePLus}>
            <Plus />

          </button>
        </>
      }

    </Container>
  )
}