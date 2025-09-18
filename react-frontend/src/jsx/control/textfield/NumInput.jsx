import React from "react";
import { styled } from '@mui/system';
import Input from '@mui/material/Input';

const NumInput0 = styled(Input)({
  width:'50px',
  height:'30px',
  border:'1px solid #000',
  paddingLeft:'3px',
  marginBottom:'20px'
});

function NumInput(props) {
  return (
    <NumInput0 type="number" placeholder={props.placeholder} variant="outlined" id={props.id} label={props.label} value={props.value} onChange={props.onChange} required={props.required} fullWidth={props.fullWidth}>
      {props.children}
    </NumInput0>
  );
}

export default NumInput;
