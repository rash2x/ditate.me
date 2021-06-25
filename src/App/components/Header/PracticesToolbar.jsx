import React from 'react';
import styled from 'styled-components';
import { IconButton, Toolbar, Typography } from '@material-ui/core';

import { Map, ViewAgenda } from '@material-ui/icons';

const Title = styled(Typography).attrs({
  variant: 'h2',
})`
  font-size: 18px;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const Button = styled(IconButton)`
  min-width: 50px;
`;

const PracticesToolbar = () => {
  return (
    <StyledToolbar>
      <Title>Расписание практик</Title>
      <div>
        <Button>
          <ViewAgenda />
        </Button>
        <Button>
          <Map />
        </Button>
      </div>
    </StyledToolbar>
  );
};

export default PracticesToolbar;
