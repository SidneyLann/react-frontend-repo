import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const HoverListGrid0 = styled(Grid)({
    width: '800',
    position: 'absolute',
    overflowY: 'scroll',
    background: '#F7F7F7',
    left: '200',
    display: 'none',
    zIndex: 2,
});

function HoverListGrid(props) {
  return (
    <HoverListGrid0
      id={props.id}
      onMouseEnter={props.onMouseEnter}
    >
      {props.children}
    </HoverListGrid0>
  );
}

export default HoverListGrid;
