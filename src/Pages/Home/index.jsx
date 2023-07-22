import { Container } from "./styles"
import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { FoodCard } from "../../Components/FoodCard"
import { Section } from "../../Components/Section"

import { api } from "../../services/index"
import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth"


export function Home() {

  const { user } = useAuth()

  const [isAdm, setIsAdm] = useState(false)
  const [search, setSearch] = useState("")
  
  const [tags, setTags] = useState([])
  const [foods, setFoods] = useState([])

  const categories = Array.from(new Set(foods.map(food => food.category)));

  // useEffect(() => {
  //   const admin = user.isAdm
  //   setIsAdm(admin === 1 ? false : true)
  //   async function fetchTags() {
  //     const response = await api.get("/tags")
  //     setTags(response.data)
  //     console.log(response.data)
  //   }
    
  //   fetchTags()
  // }, [])

  function updateFoodPictures(foods){
    if(foods){
      console.log(api, "api")
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
    async function fetchFoods() {
      const response = await api.get("/foods")
      const foodsWithPictures = updateFoodPictures(response.data)
      setFoods(foodsWithPictures)
    }
    fetchFoods()
  }, [])

  return (
    <Container>
      <Header />
      <main>
        <div className="banner">

          <div className="img-container">
            <img className="mobile-img" src="src/assets/pngegg 2.png" alt="Macarones com frutinhas e folhas" />
            <img className="desktop-img" src="src/assets/pngegg 1.png" alt="Macarones com frutinhas e folhas" />

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
              <Section key={category} title={category} id={category}>
                {
                  sectionFoods && sectionFoods.map(sectionFood => (
                    <FoodCard
                      key={String(sectionFood.id)}
                      description={sectionFood.description}
                      isAdm={isAdm}
                      title={sectionFood.name}
                      price={sectionFood.price}
                      photo={sectionFood.picture}
                      foodId={sectionFood.id}
                      />

                  ))
                }
              </Section>

            )
          })
        }

        <Section title="Refeições" id="Refeições">

          <FoodCard description="Massa fresca com camarões e pesto." isAdm={isAdm} title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." isAdm={isAdm} title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." isAdm={isAdm} title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." isAdm={isAdm} title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." isAdm={isAdm} title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." isAdm={isAdm} title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
        </Section>

        <Section title="Sobremesas" id="Sobremesas">
          <FoodCard description="Massa fresca com camarões e pesto." title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
        </Section>

        <Section title="Pratos Principais" id="Pratos Principais">
          <FoodCard description="Massa fresca com camarões e pesto." title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
        </Section>
      </main>

      <Footer />
    </Container>
  )
}