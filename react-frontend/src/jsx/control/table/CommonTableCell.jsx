import React from 'react';
import { styled } from '@mui/system';
import TableCell from '@mui/material/TableCell';

const TableValueCell2 = styled( TableCell )( {
   // borderStyle:'none',
   // width: '50%',
    textAlign: 'left',
    margin:'0 auto',
    borderBottom: '0',
} );


function CommonTableCell(props) {
    return <TableValueCell2 colSpan={props.colSpan}>{props.children} </TableValueCell2>;
}

export default CommonTableCell ;