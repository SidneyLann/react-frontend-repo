import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const CatListTitle1 = styled(Typography)({
  color:'#fff',
  background:'#3F51B5',
  fontSize:'20px',
  width:'200px',
  textAlign:'center',
  height:'50px',
  lineHeight:'50px',
  fontWeight:'800',
  marginRight:'30px'
});

function CatListTitle(props) {
  return (
    <CatListTitle1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </CatListTitle1>
  );
}

export default CatListTitle;

