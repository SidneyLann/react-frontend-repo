import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const LineGrid0 = styled(Grid)((props) => ({
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  justifyContent: props.justifyContent,//css parameter
  alignItems: 'center',
  //backgroundColor: '#F5F3EF',
  //height: 30,
  marginTop: 10,
  marginBottom: 5,
}));

function LineGrid(props) {
  const justifyContent = props.justifyContent||'space-between';
  
  return (
    <LineGrid0 container justifyContent={justifyContent}>
      {props.children}
    </LineGrid0>
  );
}

export default LineGrid;
