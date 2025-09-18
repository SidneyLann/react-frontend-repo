import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const ErrorText0 = styled(Typography)({
  color: 'tomato'
});

function ErrorText(props) {
  return (
    <ErrorText0 component="p">
      {props.children}
    </ErrorText0>
  );
}

export default ErrorText;
