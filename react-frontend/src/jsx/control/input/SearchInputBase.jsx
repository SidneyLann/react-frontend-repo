import React from 'react';
import { styled } from '@mui/system';
import InputBase from '@mui/material/InputBase';

const SearchInputBase0 = styled(InputBase)({
  width: '46.67%',
});

function SearchInputBase(props) {
  return (
    <SearchInputBase0
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {props.children}
    </SearchInputBase0>
  );
}

export default SearchInputBase;
