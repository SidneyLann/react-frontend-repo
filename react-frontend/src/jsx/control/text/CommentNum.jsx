import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const CommentNum1 = styled(Typography)({
  textAlign: 'left',
  lineHeight: '25px',
  background: '#fff',
  fontSize:'13px',
  color:'#3F51B5',
  fontWeight:'600',
  display:'inline-block',
  cursor:'pointer',
});

function CommentNum(props) {
  return (
    <CommentNum1>
      {props.children}
    </CommentNum1>
  );
}

export default CommentNum;

