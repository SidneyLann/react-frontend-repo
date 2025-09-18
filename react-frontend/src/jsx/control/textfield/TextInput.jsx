import React from "react";
import { styled } from '@mui/system';
import TextField from "@mui/material/TextField";

const TextInput0 = styled(TextField)({
  width:'80px',
  height:'70px',
  margin:'0 auto',
  paddingLeft:30
});

function TextInput(props) {
  return (
    <TextInput0 id={props.id} label={props.label} value={props.value} onChange={props.onChange} required={props.required} fullWidth={props.fullWidth}>
      {props.children}
    </TextInput0>
  );
}

export default TextInput;
