import React from 'react';
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

function ListGrid(props) {

const ListGrid0 = styled(Grid)({
  display:'flex',
});

  return (
    <ListGrid0>
      {props.children}
    </ListGrid0>
  );
}

export default ListGrid;
