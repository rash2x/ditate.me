import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RecentActors, SelfImprovement } from '@material-ui/icons';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import { useRouter } from '../hooks/useRouter';

const Base = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const NavigationBar = ({ children }) => {
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Base>
      <BottomNavigation showLabels={true} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Минибудды"
          component={Link}
          to="/"
          value={'/'}
          icon={<RecentActors />}
        />
        <BottomNavigationAction
          label="Практики"
          component={Link}
          to="/practices"
          value={'/practices'}
          icon={<SelfImprovement />}
        />
      </BottomNavigation>
      {children}
    </Base>
  );
};

export default NavigationBar;
