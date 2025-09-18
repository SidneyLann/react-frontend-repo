import React from "react";
import { styled } from '@mui/system';
import Collapse from '@mui/material/Collapse';

const CommodityCollapse0 = styled(Collapse)({});

function CommodityCollapse(props) {
    const style0={marginLeft: '20px'}
    return (
        <CommodityCollapse0 style={style0} classes={props.classes} component={props.component} in={props.in} timeout="auto" unmountOnExit>
            {props.children}
        </CommodityCollapse0>
    );
}

export default CommodityCollapse;

