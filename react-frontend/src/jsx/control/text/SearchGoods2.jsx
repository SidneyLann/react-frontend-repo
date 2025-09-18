import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const SearchGoods21 = styled(Typography)({
  background: '#158402',
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

function SearchGoods2(props) {
  return (
    <SearchGoods21 gutterBottom variant={props.variant} component={props.component} onClick={props.onClick}>
      {props.children}
    </SearchGoods21>
  );
}

export default SearchGoods2;

