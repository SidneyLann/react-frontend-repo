import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const FixedButtonGrid0 = styled(Grid)({
  width:'40px',
  background:'#303f9f',
  textAlign:'center',
  borderRadius:'4px',
  color:'#fff',
  padding:'10px 0' ,
  cursor:'pointer'
});

function FixedButtonGrid(props) {
  return (
    <FixedButtonGrid0 onClick={props.onClick} id={props.id}>
      {props.children}
    </FixedButtonGrid0>
  );
}

export default FixedButtonGrid;
