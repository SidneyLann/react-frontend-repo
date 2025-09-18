import React from 'react';
import { styled } from '@mui/system';
import Badge from '@mui/material/Badge';

const RightBadge0 = styled(Badge)({
    top: '-60px',
    position:'relative',right:'30px'
});

function RightBadge(props) {
  return <RightBadge0 color="primary" showZero badgeContent={props.badgeContent}>{props.children}</RightBadge0>;
}

export default RightBadge;
