import { ButtonStyled } from "./button.styles";
import { Button as ThemeButton } from "theme-ui";

const Button = ({ 
  children,
  startIcon = null,
  endIcon = null,
  onClick,
  type = "button",
  disabled = false
}: any) => {
  
  return (
    <ThemeButton
      css={ButtonStyled}
      onClick={onClick}
      type={type}
      disabled={disabled}
      variant="primary"
    >
      {startIcon}
      <span>
        {children}
      </span>
      {endIcon}
    </ThemeButton>
  );
}

export default Button;