import React from 'react';
import { Table } from '../../molecules';
import { Input, Button } from '../../atoms';
import { Pagination } from '../../molecules';
import { BiSearch } from 'react-icons/bi';
import { Container } from './list-page.styles';
import { Box, Flex, Text } from 'theme-ui';
import { PiPlus } from 'react-icons/pi';

const ListPage = ({ 
  datas, 
  columns, 
  customSearch, 
  page,
  title,
  limit = 10,
}: ListPageType) => {
  return (
    <Container>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Text 
          sx={{ 
            fontWeight: '600', 
            alignContent: 'center', 
            alignItems: 'center', 
            fontSize: '18px' 
          }}
        >
          {title}
        </Text>
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
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end' 
        }}
      >
        <Pagination 
          datas={datas} 
          page={page}
          limit={limit}
        />
      </Box>
    </Container>
  );
};

export default ListPage;