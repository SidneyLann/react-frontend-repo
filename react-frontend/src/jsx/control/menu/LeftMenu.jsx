import React from "react";
import { styled } from '@mui/system';
import MenuList from '@mui/material/MenuList';

const LeftMenu0 = styled(MenuList)({
  position: "relative",
  width: '20%',
  marginLeft:"10%",
  display: "inline-block"
});

function LeftMenu(props) {
    return (
        <LeftMenu0>
            {props.children}
        </LeftMenu0>
    );
}

export default LeftMenu;
