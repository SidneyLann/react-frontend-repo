import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const CenterFormPaper0 = styled(Paper)({
    width: "100%",
    textAlign: 'center',
});

function CenterPaper(props) {
    return <CenterFormPaper0 container justify="center" elevation={0}>{props.children}</CenterFormPaper0>
}

export default CenterPaper;