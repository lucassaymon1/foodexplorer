import { Container } from "./styles"

export function Section({ children, title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <section>
        {children}

      </section>
    </Container>
  )
}