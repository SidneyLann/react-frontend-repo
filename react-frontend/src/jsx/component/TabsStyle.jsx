import React from 'react';
import { styled } from '@mui/system';
import Tabs from '@mui/material/Tabs';

const TabsStyle2 = styled( Tabs )( {
    background:'#fff',
    width:'100%'
} );


function TabsStyle(props) {
    return <TabsStyle2
            value={props.value} 
            onChange={props.onChange}
            indicatorColor="primary"
            textColor="primary">
   
    {props.children}</TabsStyle2>;
}

export default TabsStyle ;