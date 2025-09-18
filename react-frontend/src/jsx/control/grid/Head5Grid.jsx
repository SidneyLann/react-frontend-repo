import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const Head5Grid0 = styled(Grid)({});

function Head5Grid(props) {
  return (
    <Head5Grid0 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </Head5Grid0>
  );
}

export default Head5Grid;
