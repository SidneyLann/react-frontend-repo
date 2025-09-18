import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const TwoSidesGrid0 = styled(Grid)({
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  justifyContent: "space-between",
});

function TwoSidesGrid(props) {
  return (
    <TwoSidesGrid0>
      {props.children}
    </TwoSidesGrid0>
  );
}

export default TwoSidesGrid;
