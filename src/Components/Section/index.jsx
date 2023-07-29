import { Container } from "./styles"
import { ButtonText } from "../ButtonText"
import { CaretLeft } from "../../icons/CaretLeft"
import { CaretRight } from "../../icons/CaretRight"
import { useState, useEffect, useLayoutEffect } from "react"

export function Section({ children, title, id, left, right }) {

  const [hasScrollBar, setHasScrollBar] = useState(false);
  const [componentMounted, setComponentMounted] = useState(false);
  const [initialButton, setInitialButton] = useState(true)

  useEffect(() => {
    const slider = document.querySelector(`#${id}`)
    const buttonLeft = document.querySelector(`#${left}`)
    const buttonRight = document.querySelector(`#${right}`)

    const mobileInterface = window.innerWidth < 1024
    
    if (!slider || !buttonLeft || !buttonRight || mobileInterface) {
      // Verifica se algum elemento não foi encontrado e sai da função
      return;
    }
    
    if(slider.scrollLeft === 0){
      buttonLeft.style.display = "none"
    }

    const handleScroll = () => {

      setInitialButton(false)

      let scrollLeft = slider.scrollLeft
  
      if(scrollLeft === 0){
        buttonLeft.style.display = "none"
      }
      else{
        buttonLeft.style.display = "flex"
      }
  
      const isEndPoint = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth
      if(isEndPoint){
        buttonRight.style.display = "none"
      }
      else{
        buttonRight.style.display = "flex"
      }
    }
    
    slider.addEventListener("scroll", handleScroll)
    return () => {
      slider.removeEventListener("scroll", handleScroll)
    } 
    
  }, [])
  
  useLayoutEffect(() => {
    const slider = document.querySelector(`#${id}`);
    const mobileInterface = window.innerWidth < 1024
    if(!slider || mobileInterface){
      return
    }
    setHasScrollBar(slider.scrollWidth > slider.clientWidth);
    setComponentMounted(true);
  }, [id, componentMounted]);
  
  async function handleScrollLeft(sectionId) {
    const slider = document.querySelector(`#${sectionId}`)
    slider.scrollLeft -= 3*(304 + 16);
    
  }

  function handleScrollRight(sectionId) {
    const slider = document.querySelector(`#${sectionId}`)
    slider.scrollLeft += 3*(304 + 16);

  }

  return (
    <Container>
      <h2>{title}</h2>
      <section className="carousel">
        <button onClick={() => handleScrollLeft(id)} className="carousel-button caret-left" id={left} style={!componentMounted || !hasScrollBar || initialButton ? { display: "none" } : {}}>
          <CaretLeft/>
        </button>  
        <div className="gradient-left gradient">

        </div>

        <div className="gradient-right gradient">

        </div>
        <div className="content" id={id}>
          {children}

        </div>

        <button onClick={() => handleScrollRight(id)} className="carousel-button caret-right" id={right} style={!componentMounted || !hasScrollBar ? { display: "none" } : {}}>
          <CaretRight/>
        </button>

      </section>
    </Container>
  )
}