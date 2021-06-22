import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import RecentActorsIcon from '@material-ui/icons/RecentActors';
import SelfImprovementIcon from '@material-ui/icons/SelfImprovement';

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction component={Link} to="/" icon={<RecentActorsIcon />} />
      <BottomNavigationAction component={Link} to="/practices" icon={<SelfImprovementIcon />} />
    </BottomNavigation>
  );
};

export default Footer;
