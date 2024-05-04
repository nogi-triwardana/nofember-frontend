import styled from '@emotion/styled';
import { Button as _Button } from "theme-ui";

export const StyledButton = styled(_Button)`
  width: ${(props: any) => props.width ? props.width : '100%'};
`;