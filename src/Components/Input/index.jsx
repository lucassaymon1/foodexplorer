import { TextContainer, NumberContainer } from "./styles";

export function Input({ inputType, icon: Icon, title, ...rest }) {

  if (inputType === "number") {

    return (
      <NumberContainer>
        <label htmlFor={title}>{title}</label>
        {Icon && <Icon />}
        <div className="input-wrapper">
          <p>R$</p>
          <input id={title} {...rest} />

        </div>
      </NumberContainer>

    )
  }

  else {

    return (
      <TextContainer>
        <label htmlFor={title}>{title}</label>
        <div className="input-wrapper change-bgcolor">
          {Icon && <Icon />}
          <input id={title} {...rest} />

        </div>
      </TextContainer>
    )
  }
}