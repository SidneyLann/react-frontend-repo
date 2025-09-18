import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const StoreContact1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  marginLeft: '90px',
  display: 'inline-block',
  height: '30px',
  textAlign: 'center',
  lineHeight: '30px',
  color: '#000',
  fontSize: '16px',
  cursor: 'pointer'
});

function StoreContact(props) {
  return (
    <StoreContact1 gutterBottom variant={props.variant} component={props.component} onClick={props.onClick}>
      {props.children}
    </StoreContact1>
  );
}

export default StoreContact;

