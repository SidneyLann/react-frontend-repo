import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const LineText0 = styled(Typography)({
  flexDirection: 'row',
  justifyContent: "flex-start",
  textAlign: 'left',
  fontSize: '14px'
});

function LeftLineText(props) {
  return (
    <LineText0>
      {props.children}
    </LineText0>
  );
}

export default LeftLineText;

