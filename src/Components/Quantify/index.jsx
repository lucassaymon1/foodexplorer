import { Container } from "./styles";
import { Minus } from "../../icons/Minus";
import { Plus } from "../../icons/Plus";

export function Quantify({ ...rest }) {

  return (
    <Container {...rest}>
      <button type="button">
        <Minus />

      </button>
      <h3>01</h3>

      <button type="button">
        <Plus />

      </button>
    </Container>
  )
}