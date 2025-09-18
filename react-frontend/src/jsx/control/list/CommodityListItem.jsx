import React from "react";
import { styled } from '@mui/system';
import ListItem from '@mui/material/ListItem';


const CommodityListByKeywordItem0 = styled(ListItem)({});

function CommodityListByKeywordItem(props) {
    return (
        <CommodityListByKeywordItem0 classes={props.classes} component={props.component} divider="true" onClick={props.onClick} button>
            {props.children}
        </CommodityListByKeywordItem0>
    );
}

export default CommodityListByKeywordItem;
