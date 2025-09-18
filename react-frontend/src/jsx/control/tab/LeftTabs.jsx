import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const LeftTab0 = styled(Grid)({
    justifyContent: flex-end
});

function LeftTab(props) {
  return (
    <LeftTab0  >
      {props.children}
    </LeftTab0>
  );
}

export default LeftTab;