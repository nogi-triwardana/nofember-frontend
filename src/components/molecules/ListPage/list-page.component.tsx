import React from 'react';
import { Table } from '../Table';
import { Input } from '../../atoms/Input';
import { BiSearch } from 'react-icons/bi';
import { Container } from './list-page.styles';
import { Flex } from 'theme-ui';

const ListPage = ({ 
  datas, 
  columns, 
  customSearch, 
}: any) => {
  return (
    <Container>
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