import React from "react";
import { styled } from '@mui/system';
import List from '@mui/material/List';


const CommodityListByKeyword0 = styled(List)({});

function CommodityListByKeyword(props) {
    return (
        <CommodityListByKeyword0 classes={props.classes}  component={props.component}>
            {props.children}
        </CommodityListByKeyword0>
    );
}

export default CommodityListByKeyword;

