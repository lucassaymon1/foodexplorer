import { Container } from "./styles";
import { Minus } from "../../icons/Minus";
import { Plus } from "../../icons/Plus";
import { useState, useEffect } from "react";

export function Quantify({ onQuantifyChange, ...rest }) {

  const [quantify, setQuantify] = useState(1)
  const [isHigherThan, setIsHigherThan] = useState(false)

  useEffect(() => {

    onQuantifyChange(quantify)

  }, [quantify, onQuantifyChange])

  function handleMinus(){

    if(quantify <= 1){
      return
    }
    else if(quantify <= 10){
      setIsHigherThan(false)
    }

    setQuantify(prevState => prevState-1)
  }

  function handlePLus(){
    setQuantify(prevState => prevState+1)

    if(quantify >= 9){
      setIsHigherThan(true)
    }

  }

  return (
    <Container {...rest}>
      {
        quantify &&
        <>
          <button type="button" onClick={handleMinus}>
            <Minus />

          </button>
          <h3>{ isHigherThan ? `${quantify}` : `0${quantify}`}</h3>
          <button type="button" onClick={handlePLus}>
            <Plus />

          </button>
        </>
      }

    </Container>
  )
}