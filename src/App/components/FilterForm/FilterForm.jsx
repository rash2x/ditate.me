import React from 'react';
import styled from 'styled-components';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const Base = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    background-color: #fff59d;
    padding: 16px;
    color: black;
  }
`;

const FilterForm = ({ anchor, open, onClose }) => {
  return <Base key={anchor} anchor={anchor} open={open} onClose={onClose} onOpen={open}></Base>;
};

export default FilterForm;
