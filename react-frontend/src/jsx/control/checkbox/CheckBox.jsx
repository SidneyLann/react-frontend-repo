import React from "react";
import { styled } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';


const CheckBox0 = styled(Checkbox)({});

function CheckBox(props) {
    return (
        <CheckBox0 id={props.id} component={props.component} divider="true" checked={props.checked} onClick={props.onClick} >
            {props.children}
        </CheckBox0>
    );
}

export default CheckBox;