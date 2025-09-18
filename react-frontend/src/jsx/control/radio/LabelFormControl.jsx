import React from 'react';
import { styled } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';

const FormControlLabel0 = styled(FormControlLabel)({
  border: '1px solid #eee',
  width: '160px',
  marginLeft: '20px',
  marginBottom: '40px',
  marginTop: '30px'
});

function LabelFormControl(props) {
  return <FormControlLabel0 value={props.value} src={props.src} control={props.control} label={props.label} />;
}

export default LabelFormControl;
