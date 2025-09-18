import React from "react";
import { styled } from '@mui/system';
import Link from '@mui/material/Link';


const NormLink0 = styled(Link)({});

function NormLink(props) {
    return (
        <NormLink0 id={props.id} component={props.component} href={props.href} onClick={props.onClick} >
            {props.children}
        </NormLink0>
    );
}

export default NormLink;