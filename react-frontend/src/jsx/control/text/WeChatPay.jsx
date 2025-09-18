import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const WeChatPay1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  fontSize: '20px',
  textAlign: 'left',
  marginTop: '30px',
  marginBottom: '30px'
  // margin:'0 auto'
});

function WeChatPay(props) {
  return (
    <WeChatPay1 {...props} gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </WeChatPay1>
  );
}

export default WeChatPay;
