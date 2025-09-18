import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const StoreSearchText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  display: 'inline-block',
  fontWeight: '700',
  width: '90px',
  background: '#3F51B5',
  height: '40px',
  textAlign: 'center',
  lineHeight: '40px',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer'
});

function StoreSearchText(props) {
  return (
    <StoreSearchText1 gutterBottom variant={props.variant} component={props.component} onClick={props.onClick}>
      {props.children}
    </StoreSearchText1>
  );
}

export default StoreSearchText;

