import React from 'react';
import { styled } from '@mui/system';
import TableCell from '@mui/material/TableCell';

const CellWithoutLine2 = styled( TableCell )( {
    borderStyle:'none',
    width:'25%',
    cursor:'pointer'
} );


function CellWithoutLine(props) {
    return <CellWithoutLine2 colSpan={props.colSpan} onClick={props.onClick}>{props.children} </CellWithoutLine2>;
}

export default CellWithoutLine ;