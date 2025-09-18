import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const Head4Grid0 = styled(Grid)({});

function Head4Grid(props) {
  return (
    <Head4Grid0 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </Head4Grid0>
  );
}

export default Head4Grid;
