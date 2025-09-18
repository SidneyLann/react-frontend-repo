import React from "react";
import { styled } from '@mui/system';
import ListItem from '@mui/material/ListItem';


const LeftList1 = styled(ListItem)({
    color:'#fff'
});

function LeftList(props) {
    return (
        <LeftList1 classes={props.classes}  component={props.component}>
            {props.children}
        </LeftList1>
    );
}

export default LeftList;

