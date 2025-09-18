import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const TabContainer0 = styled(Grid)({
  
});

function TabContainer(props) {
  return (
    <TabContainer0  >
      {props.children}
    </TabContainer0>
  );
}

export default TabContainer;