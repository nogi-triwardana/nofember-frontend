import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Button as _Button } from "theme-ui";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled(motion.div)`
  background-color: var(--blue50);
  padding: 8px;
  border-radius: 12px;
  font-weight: 600;
  color: var(--blue300);
  cursor: pointer;
`;