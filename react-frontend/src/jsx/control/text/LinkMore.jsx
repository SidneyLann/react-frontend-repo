import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const LinkMore1 = styled(Typography)({
  width: '100%',
  fontSize: '16px',
  textAlign: 'right',
  color: '#000',
  textDecoration: 'none',
  lineHeight: '10px'
});

function LinkMore(props) {
  return (
    <LinkMore1 gutterBottom variant={props.variant} component={props.component} to={props.to}>
      {props.children}
    </LinkMore1>
  );
}

export default LinkMore;

