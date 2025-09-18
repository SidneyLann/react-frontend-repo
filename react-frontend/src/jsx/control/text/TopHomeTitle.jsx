import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const TopHomeTitle1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  fontWeight: 'normal',
  width: '150px',
  color: '#3F51B5',
  lineHeight: '37px',
  fontSize: '20px',
  textAlign: 'center',
  // margin:'0 auto'
});

function TopHomeTitle(props) {
  return (
    <TopHomeTitle1 {...props} gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </TopHomeTitle1>
  );
}

export default TopHomeTitle;
