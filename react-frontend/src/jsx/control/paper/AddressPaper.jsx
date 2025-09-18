import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import logo from 'image/logo.png';
const AddressPaper0 = styled(Paper)({
  padding: 20,
  width: 290,
  textAlign: 'left'
});


const AddressPaper1 = styled(Paper)({
  padding: 20,
  width: 288,
  textAlign: 'left',
  border: '5px solid',
  border: "green 2px solid",
  boxShadow: 'none'
});

function AddressPaper(props) {
  return props.selected
    ? <AddressPaper1 container justify="center" {...props}>{props.children}</AddressPaper1>
    : <AddressPaper0 container justify="center" {...props}>{props.children}</AddressPaper0>;
}

export default AddressPaper;
