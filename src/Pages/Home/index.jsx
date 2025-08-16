import { Container } from "./styles"
import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { FoodCard } from "../../Components/FoodCard"
import { Section } from "../../Components/Section"

import { api } from "../../services/index"
import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth"

import desktopImg from "../../assets/pngegg1.png" 
import mobileImg from "../../assets/pngegg2.png" 

export function Home() {

  const { user, signOut } = useAuth()

  const [search, setSearch] = useState("")
  const [foods, setFoods] = useState([]) 

  const categories = Array.from(new Set(foods.map(food => food.category)));

  function updateFoodPictures(foods){
    if(foods){
      const foodsWithPictures = foods.map(food => {
        return{
          ...food,
          picture: food.picture ? `${api.defaults.baseURL}/files/${food.picture}`: "src/assets/foodTemplate.png"
        }
      })
      return foodsWithPictures
    }
    return null
  }

  useEffect(() => {
    async function ensureAuthenticated(){
      try{
        const response = await api.get("/sessions")
      }
      catch(error){
        if(error.response.status === 401){
          signOut()
          return
        }
      }
    }
    ensureAuthenticated()
  }, [])

  useEffect(() => {
    
    async function fetchFoods() {
      const response = await api.get(`/foods?search=${search}`)
      const foodsWithPictures = updateFoodPictures(response.data)
      setFoods(foodsWithPictures)
    }
    fetchFoods()
  }, [search])

  return (
    <Container>
      <Header value={search} onChange={e => setSearch(e.target.value)}/>
      <main>
        <div className="banner">

          <div className="img-container">
            <img className="mobile-img" src={mobileImg} alt="Macarones com frutinhas e folhas" />
            <img className="desktop-img" src={desktopImg} alt="Macarones com frutinhas e folhas" />

          </div>
          <div className="lettering-container">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

          </div>
        </div>

        {
          foods && categories.map(category => {
            const sectionFoods = foods.filter(food => (food.category === category))
            return(
              <Section key={category} title={category} id={category} left={`${category}L`} right={`${category}R`}>
                {
                  sectionFoods && sectionFoods.map(sectionFood => (
                    <FoodCard
                      key={String(sectionFood.id)}
                      product={sectionFood}
                    />
                  ))
                }
              </Section>

            )
          })
        }
      </main>

      <Footer />
    </Container>
  )
}