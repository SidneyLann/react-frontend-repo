import React from "react";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import List from '@mui/material/List';

const CarTitle0 = styled(List)({});

const cartTitle = {
  display: "inline-block",
  fontSize: "18px",
  color: "#ff4400",
  borderBottom: "2px solid #ff4400",
  paddingBottom: "6px",
  marginBottom: "0"
}

function CarTitle(props) {
    return (
        <CarTitle0 classes={props.classes}  component={props.component}>
          <div style={cartTitle}>
            <span>全部商品 6</span>
          </div>
          {props.children}
        </CarTitle0>
    );
}

export default CarTitle;

