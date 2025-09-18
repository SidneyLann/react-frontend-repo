import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const HeaderGrid2_2 = styled(Grid)({
    display:"flex",
    width:"40%",
    justifyContent:'space-around',
    textAlign:'right'
});

function HeaderGrid2(props) {
  return (
    <HeaderGrid2_2 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </HeaderGrid2_2>
  );
}

export default HeaderGrid2;
