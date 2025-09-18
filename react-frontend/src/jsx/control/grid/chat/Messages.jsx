import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const Messages0 = styled(Grid)({
  border: 'rgba(0,0,0,0.1) 1px solid',
  borderRadius: '5px',
  margin: '3px',
  background:'#8DFA69',
    
});

function Messages(props) {
  return <Messages0 item  style={props.style}>{props.children}</Messages0>;
}

export default Messages;
