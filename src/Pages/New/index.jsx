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
import { api } from "../../services";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


export function New() {

  const navigate = useNavigate()

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const [filePicture, setFilePicture] = useState(null)
  const [fileName, setFileName] = useState(null)

  const [foodName, setFoodName] = useState("")
  const [foodDescription, setFoodDescription] = useState("")
  const [foodPrice, setFoodPrice] = useState("")
  const [foodCategory, setFoodCategory] = useState("")
  
  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleAddTag(){
    if(!newTag){
      return alert("adicione um título para a tag!")
    }
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  async function handleSetPicture(event){
    const file = event.target.files[0]
    setFileName(String(file.name))
    setFilePicture(file)
  }

  async function handleCreateFood(){

    if(newTag){
      return alert("Você adicionou um título para uma nova tag, mas esqueceu de adicioná-la. Adicione-a antes de criar um novo prato.")
    }

    const formNewData = new FormData();

    try{
      if(!foodName){
        return(alert("Adicione um nome para o novo prato."))
      }
      if(!filePicture){
        return(alert("Adicione uma foto para o novo prato."))
      }
      if(!foodPrice){
        return(alert("Adicione um preço para o novo prato."))
      }
      if(!foodDescription){
        return(alert("Adicione uma descrição para o novo prato."))
      }
      if(!foodCategory){
        return(alert("Adicione uma categoria para o novo prato."))
      }
      
      formNewData.append("picture", filePicture);
      formNewData.append("name", foodName);
      formNewData.append("price", foodPrice);
      formNewData.append("description", foodDescription);
      formNewData.append("category", foodCategory);
      formNewData.append("formTags", tags)

      await api.post("/foods", formNewData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })

      alert("Novo prato cadastrado com sucesso!")
      navigate(-1)
    }
    catch(error){
      if (error.response){
        alert(error.response.data.message)
      }
      else{
        alert("Não foi possível adicionar o novo prato.")
      }
      navigate(-1)
    }

  }

  return (
    <Container>
      <Header />
      <main>
        <ButtonText onClick={() => navigate(-1)} icon={CaretLeft} title="voltar" />

        <Form>
          <h1>Novo prato</h1>

          <div className="form-area1">
            <div className="input-image-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <label className="input-image change-bgcolor" htmlFor="image">
                <Upload />
                <input type="file" id="image" accept="image/*" onChange={handleSetPicture} />
                <span className="input-image-text">{fileName ? fileName : "Adicionar imagem"}</span>
              </label>

            </div>
            <Input className="change-bgcolor" placeholder="Ex.: Salada Ceasar" type="text" title="Nome" onChange={e => setFoodName(e.target.value)}/>

            <div className="select-wrapper">
              <label className="select-label" htmlFor="select">Categoria</label>
              <div className="select-container">
                <select onChange={e => setFoodCategory(e.target.value)} className="select-box" name="select" id="select">
                  <option value="Refeições">Refeições</option>
                  <option value="Bebidas">Bebidas</option>
                  <option value="Sobremesas">Sobremesas</option>
                </select>
                <div className="icon-container">
                  <CaretLeft />
                </div>
              </div>

            </div>

          </div>

          <div className="form-area2">
            <div className="input-wrapper">
              <label htmlFor="">Ingredientes</label>
              <div className=" tags-container change-bgcolor input-container">
                {
                  tags &&
                  tags.map((tag, index) => (
                    <TagItem 
                      readOnly 
                      key={String(index)} 
                      title={tag} 
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }
                <TagItem
                  title={newTag}
                  isNew
                  placeholder="Adicionar"
                  onClick={handleAddTag}
                  onChange={e => setNewTag(e.target.value)}
                />
              </div>

            </div>
            <Input className="number-input" inputType="number" placeholder="00,00" type="number" title="Preço" onChange={e => setFoodPrice(e.target.value)}/>

          </div>


          <div className="textarea-wrapper">
            <label htmlFor="textarea">Descrição</label>
            <TextArea id="textarea" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={e => setFoodDescription(e.target.value)}/>

          </div>
          <div className="button-container">
            <div className="none"></div>
            <Button title="Salvar alterações" onClick={handleCreateFood} />

          </div>

        </Form>


      </main>
      <Footer />
    </Container>
  )
}