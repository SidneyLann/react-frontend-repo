import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const ChatTop0 = styled(Grid)({
    borderBottom:'1px solid #ddd',
    width:'100%'
});

function ChatTop(props) {
  return <ChatTop0 item>{props.children}</ChatTop0>;
}

export default ChatTop;
