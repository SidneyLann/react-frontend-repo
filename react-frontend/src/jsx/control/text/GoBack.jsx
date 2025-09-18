import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const GoBack1 = styled(Typography)({
  width: '200px',
  color: '#fff',
  lineHeight: '37px',
  background: '#3F51B5',
  height: '45px',
  lineHeight: '45px',
  borderRadius: '1px',
  marginTop: '40px',
  fontSize: '20px',
  textAlign: 'center',
  margin: '0 auto'
});

function GoBack(props) {
  return (
    <GoBack1 {...props} onClick={props.onClick} gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </GoBack1>
  );
}

export default GoBack;
