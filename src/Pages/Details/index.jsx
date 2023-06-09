import { Container } from "./styles"
import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { ButtonText } from "../../Components/ButtonText"
import { Button } from "../../Components/Button"
import { Tag } from "../../Components/Tag"
import { Quantify } from "../../Components/Quantify"

import { Receipt } from "../../icons/Receipt"
import { CaretLeft } from "../../icons/CaretLeft"

import { useNavigate } from "react-router-dom"

export function Details() {
  const navigate = useNavigate()
  let isAdm = false;
  return (
    <Container>
      <Header />

      <main>
        <ButtonText onClick={() => navigate(-1)} icon={CaretLeft} title="voltar" />

        <div className="details-container">
          <img src="src/assets/FoodTemplate1.png" alt="" />
          <div className="data-container">
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
            <div className="tags-container">
              <Tag title="alface" />
              <Tag title="cebola" />
              <Tag title="pão naan" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </div>
            {
              isAdm ?
                <div className="order-container">
                  <Button onClick={() => navigate("/edit")} title={`Editar prato`} />
                </div>
                :
                <div className="order-container">
                  <Quantify className="quantify" />
                  <Button onClick={() => navigate("/")} icon={Receipt} title={`pedir · R$ 25,00`} />
                </div>


            }

          </div>

        </div>

      </main>
      <Footer />
    </Container>
  )
}