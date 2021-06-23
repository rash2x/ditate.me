import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import RecentActorsIcon from '@material-ui/icons/RecentActors';
import SelfImprovementIcon from '@material-ui/icons/SelfImprovement';

const StyledFooter = styled(BottomNavigation)`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const NavigationBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <StyledFooter
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Минибудды"
        component={Link}
        to="/"
        icon={<RecentActorsIcon />}
      />
      <BottomNavigationAction
        label="Практики"
        component={Link}
        to="/practices"
        icon={<SelfImprovementIcon />}
      />
    </StyledFooter>
  );
};

export default NavigationBar;
