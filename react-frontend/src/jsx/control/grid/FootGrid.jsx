import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const FootGrid0 = styled(Grid)({
  //position: 'fixed',
  bottom: 0,
  left: 0,
  background:'#fff',
  minWidth:'1440px',
  // width:'1200px'
});

function FootGrid(props) {
  return (
    <FootGrid0 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </FootGrid0>
  );
}

export default FootGrid;
