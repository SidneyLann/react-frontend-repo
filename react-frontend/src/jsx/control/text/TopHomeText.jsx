import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const TopHomeText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  fontWeight: 'normal',
  width: '150px',
  color: '#3F51B5',
  lineHeight: '37px',
  fontSize: '20px',
  textAlign: 'left'
  // margin:'0 auto'
});

function TopHomeText(props) {
  return (
    <TopHomeText1 {...props} gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </TopHomeText1>
  );
}

export default TopHomeText;
