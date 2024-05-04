import { StyledButton } from "./button.styles";

const Button = ({ 
  children,
  startIcon = null,
  endIcon = null,
  onClick,
  type = "button",
  disabled = false
}: any) => {
  
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
}

export default Button;