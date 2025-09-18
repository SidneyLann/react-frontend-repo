import React from 'react';
import { styled } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";

const Table0 = styled( Table )( {
    width: '100%',
} );


function CommonTable(props) {
    return <Table0><TableBody>{props.children}</TableBody></Table0>;
}

export default CommonTable ;