import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Fab } from '@material-ui/core';

import { useRouter } from '../../hooks/useRouter';

import { RecentActors, SelfImprovement, FilterList } from '@material-ui/icons';

const Base = styled(BottomNavigation)`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const FilterIcon = styled(Fab).attrs({
  color: 'primary',
  size: 'medium',
})`
  position: absolute;
  width: 56px;
  height: 56px;
  right: 159px;
  bottom: 28px;
  background: ${props => props.theme.palette.primary.main};
  box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12),
    0px 5px 6px rgba(0, 0, 0, 0.2);
  border-radius: 28px;
`;

const NavigationBar = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Base showLabels value={value} onChange={handleChange}>
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
      {router.pathname === '/practices' && (
        <FilterIcon>
          <FilterList />
        </FilterIcon>
      )}
    </Base>
  );
};

export default NavigationBar;
