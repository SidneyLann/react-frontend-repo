import React from "react";
import { styled } from '@mui/system';
import TextField from "@mui/material/TextField";

const SearchField0 = styled(TextField)({});

function SearchField(props) {

  const [text, setText] = React.useState("");

  const handleChange = event => {
    setText(event.target.value);
    props.onChange(event.target.value);
  }

  return (
    <SearchField0 value={text} onChange={handleChange} label={props.label} >
      {props.children}
    </SearchField0>
  );
}

export default SearchField;
