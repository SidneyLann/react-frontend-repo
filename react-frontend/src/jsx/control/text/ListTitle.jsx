import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const ListTitle0 = styled(Typography)({
  display:'inline-block',
  fontSize:'14px',
  textAlign:'right',
  color:'#000',
  marginRight:'8px',
  textDecoration:'none',
  lineHeight:'20px'
});

function ListTitle(props) {
  return (
    <ListTitle0 
    onClick={props.onClick}
    onMouseOver={props.onMouseOver}
    onMouseOut={props.onMouseOut}
    inline>
      {props.children}
    </ListTitle0>
  );
}

export default ListTitle;

