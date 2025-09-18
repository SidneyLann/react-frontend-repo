import React from "react";
import { styled } from '@mui/system';
import Card from "@mui/material/Card";

const CommodityCard0 = styled(Card)({
 // marginLeft: "10%",
width: '99%',
// minHeight: '500px',
// maxHeight: '1200px',
display:"inline-block",
verticalAlign: "top"
});

function CommodityCard(props) {
  return (
    <CommodityCard0 component={props.component} to={props.to} variant="text">
      {props.children}
    </CommodityCard0>
  );
}

export default CommodityCard;
