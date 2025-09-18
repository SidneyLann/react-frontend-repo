import React from 'react';
import { styled } from '@mui/system';
import Table from '@mui/material/Table';

const Table1 = styled( Table )( {
    width: '100%',
} );


function TableWithoutLine(props) {
    return <Table1>{props.children}</Table1>;
    }

export default TableWithoutLine ;