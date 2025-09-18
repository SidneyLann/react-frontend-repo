import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const CommonTab0 = styled(Grid)({
    padding: 8 * 3
});

function CommonTab(props) {
  return <CommonTab0 container>{props.children}</CommonTab0>;
}

export default CommonTab;
