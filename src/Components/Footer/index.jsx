import { Container } from "./styles"

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <svg className="mobile-icon" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.76352 0.667969L19.2898 5.16797V14.168L9.76352 18.668L0.23724 14.168V5.16797L9.76352 0.667969Z" fill="#4D585E" />
        </svg>

        <svg className="desktop-icon" width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.7274 0.48645L25.3734 7.78763V22.39L12.7274 29.6912L0.0813456 22.39V7.78763L12.7274 0.48645Z" fill="#4D585E" />
        </svg>

        <h1>food explorer</h1>

      </div>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}