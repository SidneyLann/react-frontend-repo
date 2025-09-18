import React from 'react';
import { styled } from '@mui/system';
import CardContent from '@mui/material/CardContent';

const TextContent0 = styled(CardContent)({
  height: 100,
  padding:'0 0 0 0',
  fontSize:'14',
  color:'#757171'
});

function TextContent(props) {
  return (
    <TextContent0 image={props.image} title={props.title}>
      {props.children}
    </TextContent0>
  );
}

export default TextContent;
