import { useState } from 'react';
import { Box } from 'theme-ui';
import { ListPage } from '../../../components/organisms';
import { BreadCrumbs } from '../../../components/atoms';

const responseFake = Array(61).fill(
  {
    id: 1,
    name: 'Nogi',
    quota: 2
  }
);

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

const ItemsBreadcrumbs = [
  {
    label: "Daftar Tamu",
    path: "/guests"
  },
];

const Guests = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  return (
    <Box 
      sx={{ 
        padding: '48px',
        'div:first-child + div:last-child': {
          marginTop: '24px'
        }
      }}
    >
      <BreadCrumbs
        items={ItemsBreadcrumbs}
      />
      <ListPage
        title={"Daftar Tamu"}
        datas={responseFake}
        columns={columnsDummy}
        page={page}
        limit={limit}
      />
    </Box>
  );
};

export default Guests;