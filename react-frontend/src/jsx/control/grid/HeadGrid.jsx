import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const HeadGrid0 = styled(Grid)({
  paddingLeft: "22px",
  fontSize:'16px',
  backgroundColor:'#fff',
  borderBottom:'1px solid #ddd',
  color:'#535252'
});

function HeadGrid(props) {
  return (
    <HeadGrid0
      item={props.item}
      container={props.container}
      justify="space-between"
    >
      {props.children}
    </HeadGrid0>
  );
}

export default HeadGrid;
