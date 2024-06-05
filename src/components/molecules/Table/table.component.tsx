import React from 'react';
import { TableColumn } from './TableColumn';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TBodyStyled, TableStyled } from './table.styles';
import { Box } from 'theme-ui';

const Table = ({ datas, columns }: any) => {
  return (
    <Box 
      style={{
        padding: '4px',
        border: '2px solid var(--border-table-color)'
      }}
    >
      <TableStyled>
        {/* <TableColumn /> */}
        <TableHeader columns={columns} />
        <TBodyStyled>
          <TableRow datas={datas} columns={columns} />
        </TBodyStyled>
      </TableStyled>
    </Box>
  );
};

export default Table;