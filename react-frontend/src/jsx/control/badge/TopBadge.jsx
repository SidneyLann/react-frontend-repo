import React from 'react';
import { styled } from '@mui/system';
import Badge from '@mui/material/Badge';

const TopBadge0 = styled(Badge)({
    marginLeft:'10',
});

function TopBadge(props) {
  return <TopBadge0 color="primary" showZero badgeContent={props.content}>{props.children}</TopBadge0>;
}

export default TopBadge;
