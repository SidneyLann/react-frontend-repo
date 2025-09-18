import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const LeftListText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
//   width:'100%',
  display:'inline-block',
  fontSize:'8px',
  textAlign:'right',
  color:'#000',
  marginRight:'8px',
  textDecoration:'none',
  lineHeight:'20px'
});

function LeftListText(props) {
  return (
    <LeftListText1 
    key={props.key}
        // onClick={this.thirdTitleClick(str)}
    onClick={props.onClick}
    onMouseOver={props.onMouseOver}
    onMouseOut={props.onMouseOut}
    inline>
      {props.children}
    </LeftListText1>
  );
}

export default LeftListText;

