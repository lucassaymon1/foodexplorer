import { Container, Form } from "./styles"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { ButtonText } from "../../Components/ButtonText"

import { useNavigate } from "react-router-dom"

import { useRef, useState, useEffect } from "react"

//context

import { useAuth, authProvider } from "../../hooks/auth"

export function SignIn() {

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    if (windowSize.innerWidth >= 1024) {
      document.body.style.display = "grid";
      document.body.style.placeItems = "center";

    }
    else {
      document.body.style.display = "block";
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const [windowSize, setWindowSize] = useState(getWindowSize())

  window.addEventListener('resize', () => {
    if (windowSize.innerWidth >= 1024) {
      document.body.style.display = "grid";
      document.body.style.placeItems = "center";

    }
    else {
      document.body.style.display = "block";
    }

  });

  async function handleSignIn() {
    signIn(email, password)
  }

  const { signIn } = useAuth()

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (

    <Container>
      <main>
        <div className="logo">
          <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C" />
          </svg>

          <h1>Food Explorer</h1>
        </div>

        <Form>
          <h2>Faça login</h2>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            title="Email"
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            title="Senha"
            onChange={e => setPassword(e.target.value)}
          />

          <Button title="Entrar" onClick={handleSignIn} />
          <ButtonText onClick={() => navigate("/signup")} title="Criar uma conta" />


        </Form>

      </main>
    </Container>
  )
}