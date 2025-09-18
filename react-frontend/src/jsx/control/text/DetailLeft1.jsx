import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const DetailLeft11 = styled(Typography)({
  width: '70',
  textAlign: 'center',
  background: '#3F51B5',
  color: '#fff',
  fontSize: '16px',
  cursor:'pointer',
});

function DetailLeft1(props) {
  return (
    <DetailLeft11 onClick={props.onClick} gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </DetailLeft11>
  );
}

export default DetailLeft1;

