import React from "react";
import { styled } from '@mui/system';
import TextField from "@mui/material/TextField";

function CustomTextInput(props) {
  const width = props.width+'px';
  
const TextField0 = styled(TextField)({
  width: [width],
  '& .MuiOutlinedInput-input': {
      padding: '0px',
  },
});

  return (
    <TextField0 id={props.id} label={props.label} value={props.value} onChange={props.onChange} required={props.required} 
    fullWidth={props.fullWidth} type={props.type} >
      {props.children}
    </TextField0>
  );
}

export default CustomTextInput;
