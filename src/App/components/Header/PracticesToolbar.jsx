import React from 'react';
import styled from 'styled-components';
import { BottomNavigation, BottomNavigationAction, Toolbar, Typography } from '@material-ui/core';

import MapIcon from '@material-ui/icons/Map';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';

const StyledTitle = styled(Typography).attrs({
  variant: 'h2',
})`
  font-size: 18px;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const Button = styled(BottomNavigationAction)`
  min-width: 50px;
`;

const PracticesToolbar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <StyledToolbar>
      <StyledTitle>Расписание практик</StyledTitle>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Button icon={<ViewAgendaIcon />} />
        <Button disabled icon={<MapIcon />} />
      </BottomNavigation>
    </StyledToolbar>
  );
};

export default PracticesToolbar;
