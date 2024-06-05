import React from 'react';
import { Table } from '../../../components/molecules/Table';
import { Box } from 'theme-ui';

const responseFake = [
  {
    id: 1,
    name: 'Nogi',
    quota: 2
  },
  {
    id: 2,
    name: 'Febby',
    quota: 3
  }
];

const columnsDummy = [
  {
    column: 'id',
    name: 'No',
    render: (data: any, index: any) => {
      let no = index + 1;
      return no;
    }
  },
  {
    column: 'name',
    name: 'Nama',
    render: (data: any) => data
  },
  {
    column: 'quota',
    name: 'Kuota',
    render: (data: any) => data
  }
];

const Guests = () => {
  return (
    <Box style={{ padding: '48px' }}>
      <Table
        datas={responseFake}
        columns={columnsDummy}
      />
    </Box>
  );
};

export default Guests;