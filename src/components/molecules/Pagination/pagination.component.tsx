import React, { Fragment, useState } from "react";
import { Container, LabelParam, TypeParam, WrapperChild } from "./pagination.styles";
import { Select } from "../../atoms";

const defaultPages: any = [
  { value: 1, label: 1},
  { value: 2, label: 2},
  { value: 3, label: 3},
  { value: 4, label: 4},
  { value: 5, label: 5},
  { value: 6, label: 6},
];

const defaultLimits: any = [
  { value: 10, label: 10},
  { value: 15, label: 15},
  { value: 20, label: 20},
  { value: 25, label: 25},
  { value: 30, label: 30},
];

const Pagination = ({ 
  datas,
  page = 1,
  limit = 10, 
}: PaginationType) => {
  const [totalData] = useState(datas.length);

  return (
    <Container>
      <TypeParam> 
        <LabelParam>
          Jump to page:
        </LabelParam>
        <Select
          options={defaultPages}
        />
      </TypeParam>
      <TypeParam 
        sx={{ 
          margin: '0px 40px',
        }}
      >
        <LabelParam>
          Rows page:
        </LabelParam>
        <Select
          options={defaultLimits}
        />
      </TypeParam>
      <TypeParam>
        <LabelParam>
        {(limit * page) - (limit - 1)}-{limit * page} of {totalData} data
        </LabelParam>
      </TypeParam>
      <WrapperChild
        sx={{
          backgroundColor: 'var(--gray-300)',
          color: 'var(--gray-400)',
          border: '2px solid var(--gray-200)',
        }}
      >
        &laquo;
      </WrapperChild>
      <WrapperChild
        sx={{
          backgroundColor: 'white',
          color: '#475467',
          border: '2px solid var(--gray-200)',
        }}
      >
        &raquo;
      </WrapperChild>
    </Container>
  );
};

export default Pagination;