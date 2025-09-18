import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const SearchPaper0 = styled(Paper)({
   width:'100%',
   height:'45px'
});

function SearchPaper(props) {
    return <SearchPaper0  container justify="center">{props.children}</SearchPaper0>
}

export default SearchPaper;