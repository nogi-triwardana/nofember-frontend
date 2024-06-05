import React from 'react';
import { TdStyled } from './table-row.styles';

const TableRow = ({ datas, columns }: any) => {
  
  const getValueBasedCol = (col: any, data: any, rowKey: any) => {
    if(typeof col?.render === "function") return col?.render(data[col?.column], rowKey);
    else if(typeof col?.render === "string") return col?.render
  }

  return datas?.map((data: any, rowKey: any) => (
    <tr key={'row-table-' + rowKey}>
      {columns?.map((column: any, dataKey: any) => (
        <TdStyled
          key={'data-table-' + dataKey}
        >
          {getValueBasedCol(column, data, rowKey)}
        </TdStyled>
      ))}
    </tr>
  ));
};

export default TableRow;