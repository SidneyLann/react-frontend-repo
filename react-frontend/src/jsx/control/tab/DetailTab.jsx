import React from "react";
import { styled } from '@mui/system';
import Tab from "@mui/material/Tab";

const DetailTab0 = styled(Tab)({
    // root:{
    //     background:'red'
    // },
    // selected:{
    //     background:'red'
    // }
});

function DetailTab(props) {
  return (
    <DetailTab0  label={props.label} selected={props.selected}>
      {props.children}
    </DetailTab0>
  );
}

export default DetailTab;