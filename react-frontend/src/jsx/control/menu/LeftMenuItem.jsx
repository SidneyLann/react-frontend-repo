import React from "react";
import { styled } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';

const LeftMenuItem0 = styled(MenuItem)({});

function LeftMenuItem(props) {
    return (
        <LeftMenuItem0 compoent={props.component}>
            {props.children}
        </LeftMenuItem0>
    );
}

export default LeftMenuItem;
