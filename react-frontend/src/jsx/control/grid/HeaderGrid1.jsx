import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const HeaderGrid1_1 = styled(Grid)({
    display:"flex",
    width:"620px"
});

function HeaderGrid1(props) {
  return (
    <HeaderGrid1_1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </HeaderGrid1_1>
  );
}

export default HeaderGrid1;
