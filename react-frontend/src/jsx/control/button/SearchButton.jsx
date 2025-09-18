import React from "react";
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';

const SearchButton0 = styled(IconButton)({});

function SearchButton(props) {
  return (
    <SearchButton0 aria-label="Search" onClick={props.onClick} >
      {props.children}
    </SearchButton0>
  );
}

export default SearchButton;
