import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const TableStyled = styled(motion.table)`
  display: table;
  border-collapse: collapse;
  border-style: solid;
  border-width: 2px;
  border-color: var(--border-table-color);
  min-width: 100%;
  border-radius: 12px;
`;

export const TBodyStyled = styled(motion.tbody)`
  tr + tr {
    border-top: 2px solid var(--border-table-color);
  }
`;