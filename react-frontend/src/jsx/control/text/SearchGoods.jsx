import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const SearchGoods1 = styled(Typography)({
  background: '#3F51B5',
  cursor: 'pointer',
  height: '45px',
  lineHeight: '45px',
  width: '126px',
  color: '#fff',
  textAlign: 'center',
  fontWeight: '800',
  fontSize: '18px',
  display: 'inline-block'
});

function SearchGoods(props) {
  return (
    <SearchGoods1 gutterBottom variant={props.variant} component={props.component} onClick={props.onClick}>
      {props.children}
    </SearchGoods1>
  );
}

export default SearchGoods;

