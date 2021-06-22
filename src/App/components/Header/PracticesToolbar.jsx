import React from 'react';
import { IconButton, styled, Toolbar, Typography } from '@material-ui/core';

import MapIcon from '@material-ui/icons/Map';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';

const StyledTitle = styled(Typography)``;

const PracticesToolbar = () => {
  return (
    <Toolbar>
      <StyledTitle>Расписание практик</StyledTitle>
      <IconButton>
        <ViewAgendaIcon />
      </IconButton>
      <IconButton>
        <MapIcon />
      </IconButton>
    </Toolbar>
  );
};

export default PracticesToolbar;
