import { Container } from "./styles"
import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { ButtonText } from "../../Components/ButtonText"
import { Button } from "../../Components/Button"
import { Tag } from "../../Components/Tag"
import { Quantify } from "../../Components/Quantify"

import { Receipt } from "../../icons/Receipt"
import { CaretLeft } from "../../icons/CaretLeft"

import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services"
import { useAuth } from "../../hooks/auth"

import FoodTemplate1 from "../../assets/FoodTemplate1.png"

export function Details() {
  const [data, setData] = useState(null)
  const [quantify, setQuantify] = useState(1)
  const [price, setPrice] = useState("")
  
  const {user} = useAuth()
  const isAdm = user.isAdmin

  const params = useParams()
  const navigate = useNavigate()

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
  })

  function handleQuantifyChange(newQuantify){
    setQuantify(newQuantify)
  }

  useEffect(() => {

    async function fetchFood(){
      const response = await api.get(`/foods/${params.id}`)
      const foodWithPicture = () => ({
        ...response.data,
        picture: response.data.picture ? `${api.defaults.baseURL}/files/${response.data.picture}` : FoodTemplate1
      })
      setData(foodWithPicture)
    }
    
    fetchFood()

  }, [])

  useEffect(() => {
    if(data && quantify){
      setPrice(data.price * quantify)
    }
  }, [data, quantify])

  return (
    <Container admin={isAdm ? "true" : undefined}>
      <Header />

      <ButtonText onClick={() => navigate(-1)} icon={CaretLeft} title="voltar" />
      <main>
          {data && 
            
            <div className="details-container">
              <div className="img-container">
                <img src={data.picture} alt="Image of the selected food" />

              </div>
              <div className="data-container">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            
                <div className="tags-container">
                  {
                    data.tags.map(tag => (
                      <Tag title={tag.name} key={String(tag.id)} />
                    ))
                  }
                </div>
                {
                  isAdm ?
                    <div className="order-container">
                      <Button onClick={() => navigate(`/edit/${data.id}`)} title={`Editar prato`} />
                    </div>
                    :
                    <div className="order-container">
                      <Quantify className="quantify" onQuantifyChange={handleQuantifyChange}/>
                      <Button onClick={() => navigate("/")} icon={Receipt} title={`Incluir · ${formatter.format(price)}`} />
                    </div>


                }

              </div>

            </div>
          }


      </main>
      <Footer />
    </Container>
  )
}