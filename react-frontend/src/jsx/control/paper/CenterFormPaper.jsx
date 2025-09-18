import React from 'react';
import Paper from '@mui/material/Paper';
//import { styled } from '@mui/system';
import { styled } from '@mui/system';

const CenterFormPaper0 = styled(Paper)({
    position: 'absolute',
    top: '50%',
    left: '67%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '480px',
    textAlign: 'center'
});

function CenterFormPaper(props) {
    return <CenterFormPaper0 container >{props.children}</CenterFormPaper0>
}

export default CenterFormPaper;