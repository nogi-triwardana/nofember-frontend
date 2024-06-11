import React, { Fragment } from 'react';
import { TableColumn } from './TableColumn';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TBodyStyled, TableStyled } from './table.styles';

const Table = ({ datas, columns }: any) => {
  return (
    <Fragment>
      <TableStyled>
        {/* <TableColumn /> */}
        <TableHeader columns={columns} />
        <TBodyStyled>
          <TableRow datas={datas} columns={columns} />
        </TBodyStyled>
      </TableStyled>
    </Fragment>
  );
};

export default Table;