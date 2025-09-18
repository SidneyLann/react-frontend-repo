import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const ContainerGrid0 = styled(Grid)({
  width:'100%',
  textAlign:'center'
});

function ContainerGrid(props) {
  return <ContainerGrid0 container>{props.children}</ContainerGrid0>;
}

export default ContainerGrid;
