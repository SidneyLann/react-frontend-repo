import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const LgTitle1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  fontWeight: 'normal',
  width: '120px',
  color: '#3F51B5',
  lineHeight: '37px',
  marginTop:'40px',
  fontSize: '20px',
  textAlign: 'left',
  margin:'0 auto'
});

function LgTitle(props) {
  return (
    <LgTitle1 {...props} gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </LgTitle1>
  );
}

export default LgTitle;
