import { Container, Form } from "../SignIn/styles"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { ButtonText } from "../../Components/ButtonText"

import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {api} from "../../services"


export function SignUp() {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleSignUp(){
    try{
      const response = await api.post("/users", {
        name,
        email,
        password
      })
      alert("Novo usuário cadastrado com sucesso!")
      navigate(-1)
    }
    catch(error){
      if(error.response){
        alert(error.response.data.message)
      }
      else{
        alert("Não foi possível cadastrar o novo usuário.")
      }
    }
  }

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
          <h2>Crie sua conta</h2>
          <Input
            placeholder="Exemplo: Maria da Silva"
            type="text"
            title="Seu nome"
            onChange={e => setName(e.target.value)}
          />

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

          <Button title="Criar conta" onClick={handleSignUp}/>
          <ButtonText onClick={() => navigate("/")} title="Já tenho uma conta" />

        </Form>

      </main>
    </Container>
  )
}