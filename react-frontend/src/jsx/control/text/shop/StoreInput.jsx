import React from 'react';
import { styled } from '@mui/system';
import Input from '@mui/material/Input';

const StoreInput0 = styled(Input)({
  width: '200px',
  height: '40px',
  border: '3px solid #3F51B5',
  marginLeft: '200px',
  paddingLeft: '10px',
  marginBottom: '20px'
});

function StoreInput(props) {
  return (
    <StoreInput0 placeholder={props.placeholder} variant="outlined" id={props.id} label={props.label} value={props.value} onChange={props.onChange} required={props.required} fullWidth={props.fullWidth}>
      {props.children}
    </StoreInput0>
  );
}

export default StoreInput;
