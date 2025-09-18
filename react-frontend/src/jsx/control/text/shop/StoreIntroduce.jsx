import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const StoreIntroduce1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  marginLeft:'20px',
  height:'30px',
  textAlign:'center',
  lineHeight:'30px',
  color:'#888',
  fontSize:'18px',
  position:'absolute',
  top:'40px',
  left:'120px'
});

function StoreIntroduce(props) {
  return (
    <StoreIntroduce1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </StoreIntroduce1>
  );
}

export default StoreIntroduce;

