import { Container } from "./styles";

export function Button({ loading = false, onClick, title, icon: Icon, ...rest }) {
  return (

    <Container
      type="button"
      onClick={onClick}
      disabled={loading}
      {...rest}
    >
      {Icon && <Icon />}
      {loading ? "Carregando..." : title}
    </Container>

  )
}