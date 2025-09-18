import React from 'react';
import { styled } from '@mui/system';
import TableCell from '@mui/material/TableCell';

const RowTableCell0 = styled( TableCell )( {
} );


function RowTableCell(props) {
    return <RowTableCell0 colSpan={props.colSpan}>{props.children} </RowTableCell0>;
}

export default RowTableCell ;