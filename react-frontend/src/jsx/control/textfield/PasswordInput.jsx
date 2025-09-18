import React from "react";
import TextField from "@mui/material/TextField";

function PasswordInput(props) {
  return (
    <TextField variant="outlined" type="password" placeholder={props.placeholder} id={props.id} label={props.label} value={props.value} onChange={props.onChange} required={props.required} >
      {props.children}
    </TextField>
  );
}

export default PasswordInput;
