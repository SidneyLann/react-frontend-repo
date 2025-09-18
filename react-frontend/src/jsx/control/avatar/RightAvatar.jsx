import React from 'react';
import { styled } from '@mui/system';
import Avatar from '@mui/material/Avatar';

const RightAvatar1 = styled(Avatar)({
  width:'80px',
  height:'80px',
  margin:'0 auto'
});

function RightAvatar(props) {
  return (
    <RightAvatar1 src={props.src}>
    </RightAvatar1>
  );
}

export default RightAvatar;
