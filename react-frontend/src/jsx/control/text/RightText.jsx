import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const RightText0 = styled(Typography)({
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  alignSelf: 'right',
  justifyContent: "flex-end",
  //marginBottom: 10,
  fontSize: 16,
});

function RightText(props) {
  return (
    <RightText0>
      {props.children}
    </RightText0>
  );
}

export default RightText;

