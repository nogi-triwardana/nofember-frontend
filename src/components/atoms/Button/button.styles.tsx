import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Button as _Button } from "theme-ui";

export const Container = styled(motion.div)`
  width: ${(props: any) => props.width ? props.width : '100%'};
`;

export const ButtonStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  * + * {
    margin-left: 8px;
  }
  font-size: 14px;
`;