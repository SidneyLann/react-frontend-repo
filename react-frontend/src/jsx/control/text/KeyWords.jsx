import React from "react";
import { styled } from '@mui/system';
import Typography from "@mui/material/Typography";

const KeyWords0 = styled(Typography)({
    position:'absolute',
    top:'124px',
    left:'428px',
    fontSize:'18px',
    color:'#535252'
});

function KeyWords(props) {
  return (
    <KeyWords0 inline>
      {props.children}
    </KeyWords0>
  );
}

export default KeyWords;
