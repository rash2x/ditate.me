import React from 'react';
import styled from 'styled-components';
import { IconButton, Toolbar, Typography } from '@material-ui/core';

import { Map, ViewAgenda } from '@material-ui/icons';

const Title = styled(Typography).attrs({
  variant: 'h2',
})`
  font-size: 1.8rem;
`;

const Base = styled(Toolbar)`
  justify-content: space-between;
`;

const ViewButtons = styled.div``;

const Button = styled(IconButton)`
  min-width: 50px;
`;

const PracticesToolbar = () => {
  return (
    <Base>
      <Title>Расписание практик</Title>
      <ViewButtons>
        <Button>
          <ViewAgenda />
        </Button>
        <Button>
          <Map />
        </Button>
      </ViewButtons>
    </Base>
  );
};

export default PracticesToolbar;
