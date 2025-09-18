import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const OrganizationGrid0 = styled(Grid)({
  width:'74px'
});

function OrganizationGrid(props) {
  return (
    <OrganizationGrid0
      container={props.container}
      item={props.item}
      justify={props.justify}
      xs={props.xs}
    >
      {props.children}
    </OrganizationGrid0>
  );
}

export default OrganizationGrid;
