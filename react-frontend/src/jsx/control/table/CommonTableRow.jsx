import React from "react";
import { styled } from '@mui/system';
import TableRow from "@mui/material/TableRow";

const TableTitleRow1 = styled(TableRow)({
  textAlign: 'left',
  margin:'0 auto',
  border: '0',
});

function CommonTableRow(props) {
  return <TableTitleRow1>{props.children}</TableTitleRow1>;
}

export default CommonTableRow;
