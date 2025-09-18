import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";
const ChatPaperWithGrid0 = styled(Paper)({
  // height:100,
  width: 1000,
  // padding: 20,
  paddingTop: 0,
  paddingBottom: 20,
  textAlign: 'center',
  margin: 20
});

function ChatPaperWithGrid(props) {
  return <ChatPaperWithGrid0>
    <Grid container spacing={16} direction={"column"} justify={"flex-start"} alignItems={"center"}>
      {props.children}
    </Grid>
  </ChatPaperWithGrid0>
}

export default ChatPaperWithGrid;
