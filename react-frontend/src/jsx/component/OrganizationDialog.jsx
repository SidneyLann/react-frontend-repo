import React from 'react';
import { styled } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const DialogContent0 = styled( DialogContent )( {
    width:'600px',
    height:'60%',
    padding:0
} );


function OrganizationDialog(props) {
    return  <DialogContent0>
    {props.children}
    </DialogContent0>;
}

export default OrganizationDialog ;