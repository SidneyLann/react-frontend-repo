import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const HeaderGrid3_3 = styled(Grid)({
    // display:"flex",
    width:"610px",
    justifyContent:'space-around',
    border:'3px solid #3F51B5',
    marginLeft:'100px',
    height:'51px'
});

function HeaderGrid3(props) {
  return (
    <HeaderGrid3_3 id={props.id} item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </HeaderGrid3_3>
  );
}

export default HeaderGrid3;
