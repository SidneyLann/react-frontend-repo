import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const ItemGrid0 = styled(Grid)({});

function ItemGrid(props) {
  return (
    <ItemGrid0 item>
      {props.children}
    </ItemGrid0>
  );
}

export default ItemGrid;
