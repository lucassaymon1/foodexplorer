import { Container } from "./styles"
import { Plus } from "../../icons/Plus"
import { Close } from "../../icons/Close"

export function TagItem({ isNew, onClick, title, value, ...rest }) {

  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={title} {...rest}
        placeholder="Adicionar"
      />
      <button
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
        type="button"
      >
        {isNew ? <Plus /> : <Close />}
      </button>
    </Container>

  )
}