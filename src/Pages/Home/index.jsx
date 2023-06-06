import { Container } from "./styles"
import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { FoodCard } from "../../Components/FoodCard"
import { Section } from "../../Components/Section"

export function Home() {
  const isAdm = true
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

        <Section title="Refeições">
          <FoodCard description="Massa fresca com camarões e pesto." isAdm={isAdm} title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." isAdm={isAdm} title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." isAdm={isAdm} title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
        </Section>

        <Section title="Sobremesas">
          <FoodCard description="Massa fresca com camarões e pesto." title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
        </Section>

        <Section title="Pratos Principais">
          <FoodCard description="Massa fresca com camarões e pesto." title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
          <FoodCard description="Massa fresca com camarões e pesto." title="Spaguetti Gambe >" price="79,97" photo="src/assets/foodTemplate.png" />
        </Section>
      </main>

      <Footer />
    </Container>
  )
}