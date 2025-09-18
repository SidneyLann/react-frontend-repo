import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const SearchStore21 = styled(Typography)({
  background:'#3F51B5',
  height: '51px',
  fontWeight: 'normal',
  cursor:'pointer',
  lineHeight:'51px',
  position:'relative',
  left:'586px',
  top:'-54px',
  width:'126px',
  color:'#fff',
  textAlign:'center',
  fontWeight:'800',
  fontSize:'18px',
  display:'inline-block',
  marginLeft:'20px',
  borderRadius:'2px'
});

function SearchStore2(props) {
  return (
    <SearchStore21 gutterBottom variant={props.variant} component={props.component} onClick={props.onClick}>
      {props.children}
    </SearchStore21>
  );
}

export default SearchStore2;

