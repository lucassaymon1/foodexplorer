import { Container, Form } from "./styles"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { ButtonText } from "../../Components/ButtonText"

import { useNavigate } from "react-router-dom"

export function SignIn() {

  const navigate = useNavigate()
  return (
    <Container>
      <main>

        <Form>
          <div className="logo">
            <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C" />
            </svg>

            <h1>Food Explorer</h1>
          </div>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            title="Email"
          />

          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            title="Senha"
          />

          <Button title="Entrar" />
          <ButtonText onClick={() => navigate("/signup")} title="Criar uma conta" />


        </Form>

      </main>
    </Container>
  )
}