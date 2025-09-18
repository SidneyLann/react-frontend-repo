import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const CustomGrid0 = styled(Grid)({
  //position: 'fixed',
  //bottom: 240,
  //right: 0,
  
});

function CustomGrid(props) {
  return (
    <CustomGrid0>
      {props.children}
    </CustomGrid0>
  );
}

export default CustomGrid;
