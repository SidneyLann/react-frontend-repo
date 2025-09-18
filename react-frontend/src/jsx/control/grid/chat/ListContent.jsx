import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const ListContent0 = styled(Grid)({
    minHeight: '330px',
    margin:0, 
    background:'#eee',
    overflow: 'auto', 
    display:'flex',
    flexWrap: 'no-wrap',
    overflowY:'scroll'
    
});

function ListContent(props) {
  return <ListContent0 item container spacing={8} direction="column" >{props.children}</ListContent0>;
}

export default ListContent;
