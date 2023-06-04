import { Container, Form } from "./styles";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { TextArea } from "../../Components/TextArea";
import { TagItem } from "../../Components/TagItem";

import { CaretLeft } from "../../icons/CaretLeft";
import { Upload } from "../../icons/Upload"

import { useState } from "react";
import { useNavigate } from "react-router-dom"


export function New() {

  const navigate = useNavigate()

  const [fileName, setFileName] = useState("")
  return (
    <Container>
      <Header />
      <main>
        <div className="button-text">
          <ButtonText onClick={() => navigate(-1)} icon={CaretLeft} title="voltar" />

        </div>

        <Form>
          <h1>Novo prato</h1>

          <div className="input-image-wrapper">
            <label htmlFor="image">Imagem do prato</label>
            <label className="input-image change-bgcolor" htmlFor="image">
              <Upload />
              <input type="file" id="image" accept="image/*" onChange={e => setFileName(String(e.target.files[0].name))} />
              <span className="input-image-text">{fileName ? fileName : "Adicionar imagem"}</span>
            </label>

          </div>
          <Input className="change-bgcolor" placeholder="Ex.: Salada Ceasar" type="text" title="Nome" />

          <label className="select-label" htmlFor="select">Categoria</label>
          <div className="select-container">
            <select className="select-box" name="select" id="select">
              <option value="Refeições">Refeições</option>
              <option value="Refeições">Pratos principais</option>
              <option value="Refeições">Sobremesas</option>
            </select>
            <div className="icon-container">
              <CaretLeft />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="">Ingredientes</label>
            <div className="change-bgcolor input-container">
              <TagItem readOnly title="Pão Naan" />
              <TagItem isNew placeholder="Adicionar" />
            </div>

          </div>
          <Input className="number-input" inputType="number" placeholder="00,00" type="number" title="Preço" />

          <div className="textarea-wrapper">
            <label htmlFor="textarea">Descrição</label>
            <TextArea id="textarea" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

          </div>
          <Button title="Salvar alterações" onClick={() => navigate("/")} />

        </Form>


      </main>
      <Footer />
    </Container>
  )
}