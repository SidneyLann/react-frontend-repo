import React from "react";
import { styled } from '@mui/system';
import List from '@mui/material/List';


const CommodityList0 = styled(List)({});

function CommodityList(props) {
    return (
        <CommodityList0 classes={props.classes}  component={props.component}>
            {props.children}
        </CommodityList0>
    );
}

export default CommodityList;

