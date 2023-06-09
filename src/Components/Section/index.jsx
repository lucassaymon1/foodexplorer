import { Container } from "./styles"
import { ButtonText } from "../ButtonText"
import { CaretLeft } from "../../icons/CaretLeft"
import { CaretRight } from "../../icons/CaretRight"

export function Section({ children, title, id }) {

  function handleScrollLeft(sectionId) {
    const sliderLeft = document.querySelector(`#${sectionId}`)
    sliderLeft.scrollLeft -= (304 + 16);
  }

  function handleScrollRight(sectionId) {
    const sliderRight = document.querySelector(`#${sectionId}`)
    sliderRight.scrollLeft += (304 + 16);
    console.log("opa")
  }

  return (
    <Container>
      <h2>{title}</h2>
      <section className="carousel">
        <ButtonText onClick={() => handleScrollLeft(id)} className="carousel-button caret-left" icon={CaretLeft} />
        <div className="gradient-left gradient">

        </div>

        <div className="gradient-right gradient">

        </div>
        <div className="content" id={id}>
          {children}

        </div>

        <ButtonText onClick={() => handleScrollRight(id)} className="carousel-button caret-right" icon={CaretRight} />

      </section>
    </Container>
  )
}