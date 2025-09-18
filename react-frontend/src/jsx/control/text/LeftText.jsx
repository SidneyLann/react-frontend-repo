import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const LeftText0 = styled(Typography)({
  alignSelf: 'left',
  alignItems: 'center',
  //marginTop: 10,
  fontSize: 16,
});

function LeftText(props) {
  return (
    <LeftText0>
      {props.children}
    </LeftText0>
  );
}

export default LeftText;

