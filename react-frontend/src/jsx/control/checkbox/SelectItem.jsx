import React from "react";
import { styled } from '@mui/system';
import Select from "@mui/material/Select";

const Select0 = styled(Select)({

});

function SelectItem(props) {
  return (
    <Select0
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      inputProps={props.inputProps}
    >
      {props.children}
    </Select0>
  )
}

export default SelectItem;