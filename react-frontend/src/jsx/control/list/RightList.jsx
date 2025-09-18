import React from "react";
import { styled } from '@mui/system';
import ListItem from '@mui/material/ListItem';


const RightList1 = styled(ListItem)({
    color:'#fff',
    textAlign:'center'
});

function RightList(props) {
    return (
        <RightList1 classes={props.classes}  component={props.component}>
            {props.children}
        </RightList1>
    );
}

export default RightList;

