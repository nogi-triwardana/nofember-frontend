import styled from '@emotion/styled';
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  padding: 16px;
  border: 2px solid var(--border-table-color);
  div + table {
    margin-top: 24px;
  }
`;