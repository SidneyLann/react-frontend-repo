import React from "react";
import { styled } from '@mui/system';
import Typography from "@mui/material/Typography";

const PayPrice0 = styled(Typography)({
	fontSize:'20px',
});

function PayPrice(props) {
  return (
    <PayPrice0 component="p" color={props.color} onClick={props.onClick}>
      {props.children}
    </PayPrice0>
  );
}

export default PayPrice;
