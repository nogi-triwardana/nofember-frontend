import React from 'react';
import { motion } from 'framer-motion';
import { THeadStyled, ThStyled } from './table-header.styles';

const TableHeader = ({ columns }: any) => {
  return (
    <THeadStyled>
      <motion.tr>
        {columns.map((column: any, key: any) => (
          <ThStyled>{column?.name}</ThStyled>
        ))}
      </motion.tr>
    </THeadStyled>
  );
}

export default TableHeader;