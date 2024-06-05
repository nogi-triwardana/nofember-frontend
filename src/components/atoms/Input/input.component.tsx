import React, { cloneElement } from "react";
import { BiSearch } from "react-icons/bi";
import { Input as ThemeInput } from "theme-ui";
import { Container } from "./input.styles";
import { css } from "@emotion/react";

const Input = ({
  icon,
  ...props
}: any) => {
  return (
    <Container>
      {icon && cloneElement(icon)}
      <ThemeInput 
        css={css`
          border-width: 0px
        `}
        {...props}
      />
    </Container>
  );
}

export default Input;