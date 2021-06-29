import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RecentActors, SelfImprovement, FilterList } from '@material-ui/icons';
import { BottomNavigation, BottomNavigationAction, Fab } from '@material-ui/core';

import { useRouter } from '../../hooks/useRouter';

import FilterForm from '../FilterForm/FilterForm';

const Base = styled(BottomNavigation).attrs({ showLabels: true })`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const FilterIcon = styled(Fab).attrs({
  color: 'primary',
  size: 'medium',
})`
  position: absolute;
  right: 50%;
  bottom: 28px;
  transform: translate(50%);
`;

const NavigationBar = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname);
  const [drawers, setDrawer] = React.useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = open => () => {
    setDrawer(open);
  };

  return (
    <Base value={value} onChange={handleChange}>
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
        <FilterIcon onClick={toggleDrawer(true)}>
          <FilterList />
        </FilterIcon>
      )}
      <FilterForm anchor="bottom" open={drawers} onClose={toggleDrawer(false)} />
    </Base>
  );
};

export default NavigationBar;
