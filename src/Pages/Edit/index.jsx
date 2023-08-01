import { Container, Form } from "../New/styles";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { TextArea } from "../../Components/TextArea";
import { TagItem } from "../../Components/TagItem";

import { CaretLeft } from "../../icons/CaretLeft";
import { Upload } from "../../icons/Upload"

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services";

export function Edit() {
  const navigate = useNavigate()
  const params = useParams()

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const [fileName, setFileName] = useState(null)
  const [filePicture, setFilePicture] = useState(null)
  const [data, setData] = useState(null)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")

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

  function handleChangePicture(event){
    const file = event.target.files[0]
    setFileName(String(file.name))
    setFilePicture(file)
  }

  async function handleDeleteFood(){
    const deleteFood = confirm("Tem certeza de que deseja excluir este prato do cardápio?")
    if(deleteFood){
      try{
        await api.delete(`/foods/${params.id}`)
        alert("O prato foi excluído do cardápio.")
        navigate("/")
      }
      catch(error){
        if(error.response){
          alert(error.response.data.message)
        }
        else{
          alert("Não foi possível excluir o prato.")
        }
        navigate("/")
      }

    }
  }

  async function handleUpdateFood(){

    const formUpdateData = new FormData()
    formUpdateData.append("picture", filePicture)

    try{

      if(!filePicture){
        return(alert("Adicione uma foto para o novo prato."))
      }

      const response = await api.put(`/foods/${params.id}`, {
        name: name ? name : data.name,
        price: price ? price : data.price,
        category: category ? category : data.category,
        description: description ? description : data.description,
        tags
      })

      await api.patch(`/foods/picture/${params.id}`, formUpdateData)

      alert("Prato atualizado com sucesso!")

      navigate("/")


    }
    catch(error){
      if(error.response){
        alert(error.response.data.message)
      }
      else{
        alert("Não foi possível atualizar o prato")
      }
    }
  }

  useEffect(() => {

    async function fetchFood(){
      const response = await api.get(`/foods/${params.id}`)
      
      setData(response.data)
      setName(response.data.name)
      setPrice(response.data.price)
      setCategory(response.data.category)
      setDescription(response.data.description)
      const formattedTags = response.data.tags.map(tag => (
        tag.name
      ))

      setTags(formattedTags)
    }
    
    fetchFood()

  }, [])

  return (
    <Container>
      <Header />
      <main>
        <ButtonText onClick={() => navigate(-1)} icon={CaretLeft} title="voltar" />

        {
          data &&
          <Form>
            <h1>Editar prato</h1>

            <div className="form-area1">

              <div className="input-image-wrapper">
                <label htmlFor="image">Imagem do prato</label>
                <label className="input-image change-bgcolor" htmlFor="image">
                  <Upload />
                  <input type="file" id="image" accept="image/*" onChange={handleChangePicture} />
                  <span className="input-image-text">{fileName ? fileName : "Selecionar imagem para alterá-la"}</span>
                </label>

              </div>
              <Input 
                className="change-bgcolor" 
                placeholder="Ex.: Salada Ceasar" 
                value={name} 
                type="text" 
                title="Nome" 
                onChange={ e => setName(e.target.value)}
              />

              <div className="select-wrapper">
                <label className="select-label" htmlFor="select">Categoria</label>
                <div className="select-container">
                  <select
                    value={category} 
                    className="select-box" 
                    name="select" 
                    id="select" 
                    onChange={e => setCategory(e.target.value)}
                  >
                    <option value="Refeições">Refeições</option>
                    <option value="Sobremesas">Sobremesas</option>
                    <option value="Bebidas">Bebidas</option>
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
                <div className="tags-container change-bgcolor input-container">

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
                    isNew 
                    title={newTag} 
                    placeholder="Adicionar" 
                    onClick={handleAddTag} 
                    onChange={e => setNewTag(e.target.value)}
                  />
                </div>

              </div>
              <Input 
                className="number-input" 
                inputType="number" 
                placeholder="00,00" 
                value={price} 
                type="number" 
                title="Preço"
                onChange={ e => setPrice(e.target.value)} />
            </div>

            <div className="textarea-wrapper">
              <label htmlFor="textarea">Descrição</label>
              <TextArea
                id="textarea" 
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
                value={description} 
                onChange={ e => setDescription(e.target.value)}
              />

            </div>

            <div className="button-container">
              <Button onClick={handleDeleteFood} className="delete-button" title="Excluir prato" />
              <Button onClick={handleUpdateFood} title="Salvar alterações" />

            </div>

          </Form>
        }
        


      </main>
      <Footer />
    </Container>
  )
}