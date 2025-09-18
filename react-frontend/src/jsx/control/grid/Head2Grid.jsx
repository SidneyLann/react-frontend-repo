import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const Head2Grid0 = styled(Grid)({
	  paddingLeft: "130px",
    paddingRight: "130px",
    minWidth:'1440px',
    display:'flex',
    justifyContent:'left'
});

function Head2Grid(props) {
  return (
    <Head2Grid0 
    container={props.container}
    item={props.item}
    justify="space-between"
    xs={props.xs}>
      {props.children}
    </Head2Grid0>
  );
}

export default Head2Grid;
