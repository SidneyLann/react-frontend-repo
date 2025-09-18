import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const CustomPaper0 = styled(Paper)({
   // height:100,
    width: 500,
    padding:5,
   // textAlign: 'center',
});

function CustomPaper(props) {
    return <CustomPaper0  container justify="center">{props.children}</CustomPaper0>
}

export default CustomPaper;