import React from 'react';
import { styled } from '@mui/system';
import Select from '@mui/material/Select';

const SelectOrganizationField0 = styled(Select)({
  height: '46px',
  width: '75px',
  minWidth: '50px'

});

function SelectOrganizationField(props) {
  return (
    <SelectOrganizationField0 native id={props.id} value={props.value} onChange={props.onChange}>
      {props.children}
    </SelectOrganizationField0>
  );
}

export default SelectOrganizationField;

