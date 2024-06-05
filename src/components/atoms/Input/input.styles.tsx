import { Label as _Label } from "theme-ui";
import styled from '@emotion/styled';
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: var(--gray-200);
  border-style: solid;
  padding: 4px 12px;
  border-radius: 12px;

  * + * {
    margin-left: 10px;
  };

  :focus-within {
    border-color: black;
  }
`;