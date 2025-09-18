import React from "react";
import { styled } from '@mui/system';
import Radio from '@mui/material/Radio';

const LabelRadio0 = styled(Radio)({});

function LabelRadio(props) {
  return (
    <LabelRadio0 {...props}/>
  )
}

export default LabelRadio;