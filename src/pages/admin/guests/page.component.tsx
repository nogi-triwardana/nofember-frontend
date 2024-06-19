import { Box } from 'theme-ui';
import { ListPage } from '../../../components/molecules';

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
    <Box sx={{ padding: '48px' }}>
      <ListPage
        title={"Daftar Tamu"}
        datas={responseFake}
        columns={columnsDummy}
      />
    </Box>
  );
};

export default Guests;