import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const StoreName1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  marginLeft:'20px',
  height:'30px',
  textAlign:'center',
  lineHeight:'30px',
  color:'#3F51B5',
  fontSize:'24px',
  position:'absolute',
  top:'5px',
  left:'120px'

});

function StoreName(props) {
  return (
    <StoreName1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </StoreName1>
  );
}

export default StoreName;

