import React from "react";
import { styled } from '@mui/system';
import Typography from "@mui/material/Typography";

const InlineText0 = styled(Typography)({
  marginTop: '8'
});

function InlineText(props) {
  return (
    <InlineText0 inline>
      {props.children}
    </InlineText0>
  );
}

export default InlineText;
