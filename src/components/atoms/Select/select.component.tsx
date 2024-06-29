import React from 'react';
import { Container } from './select.styles';
import { FaAngleDown } from "react-icons/fa";

function Select<T extends OptionSelectType<string | number>[]> ({ 
  options,
  ...props 
}: SelectPropsType<T>) {
  return (
    <Container 
      {...props}
      sx={{ 
        marginTop: '0px !important' 
      }}
      arrow={
        <FaAngleDown 
          style={{
            marginLeft: -24,
            alignSelf: 'center',
            pointerEvents: 'none',
            color: 'var(--gray-600)'
          }}
        />
      }
    >
      {options.map((option: any, key: number) => (
        <option
          key={'options-select-' + key}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </Container>
  );
};

export default Select;