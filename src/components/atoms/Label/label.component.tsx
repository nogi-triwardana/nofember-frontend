import { StyledLabel } from "./label.styles";

const Label = ({ 
  children,
  ...props 
}: any) => {
  
  return (
    <StyledLabel
      {...props}
    >
      {children}
    </StyledLabel>
  );
}

export default Label;