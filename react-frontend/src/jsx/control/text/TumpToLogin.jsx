import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const TumpToLogin1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  display:'inline',
  fontSize:'16px',
  color:'#B2191B',
  textDecoration:'none',
});

function TumpToLogin(props) {
  return (
    <TumpToLogin1 gutterBottom variant={props.variant} component={props.component} to={props.to}>
      {props.children}
    </TumpToLogin1>
  );
}

export default TumpToLogin;

