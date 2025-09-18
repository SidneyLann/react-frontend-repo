import React from "react";
import { styled } from '@mui/system';
import FormControl from "@mui/material/FormControl";

const SelectForm0 = styled(FormControl)({
  minWidth: 140
});

function SelectForm(props) {
  return (
    <SelectForm0 classes={props.classes}>
      {props.children}
    </SelectForm0>
  )
}

export default SelectForm;