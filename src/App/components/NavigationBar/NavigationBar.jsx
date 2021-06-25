import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import RecentActorsIcon from '@material-ui/icons/RecentActors';
import SelfImprovementIcon from '@material-ui/icons/SelfImprovement';

const Base = styled(BottomNavigation)`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const NavigationBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Base showLabels value={value} onChange={handleChange}>
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
    </Base>
  );
};

export default NavigationBar;
