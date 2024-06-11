import React from 'react';
import { Table } from '../Table';
import { Input, Button } from '../../atoms';
import { BiSearch } from 'react-icons/bi';
import { Container } from './list-page.styles';
import { Box, Flex } from 'theme-ui';
import { PiPlus } from 'react-icons/pi';

const ListPage = ({ 
  datas, 
  columns, 
  customSearch, 
}: any) => {
  return (
    <Container>
      <Flex sx={{ justifyContent: 'flex-end' }}>
        <Box>
          <Button
            startIcon={<PiPlus />}
          >
            Tambah Data
          </Button>
        </Box>
      </Flex>
      <Flex sx={{ flex: '1 1 auto' }}>
        {customSearch ? customSearch : (
          <Input 
            icon={(
              <BiSearch 
                size={20}
                style={{
                  color: 'var(--gray-400)'
                }} 
              />
            )}
          />
        )}
      </Flex>
      <Table
        datas={datas}
        columns={columns}
      />
    </Container>
  );
};

export default ListPage;