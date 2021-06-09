import React from 'react';

import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

const Base = styled.div`
  font-size: 1.8rem;
  font-weight: ${props => props.theme.typography.fontWeightBold};
  display: flex;
  width: 100%;
`;

const Beta = styled.div`
  background: ${props => props.inverse ?
          props.theme.palette.common.black :
          props.theme.palette.primary.main};
  border-radius: 2px;
  padding: 3px 6px;
  position: relative;
  left: 2px;

  font-size: 1.3rem;
  font-weight: ${props => props.theme.typography.fontWeightBold};
  color: ${props => props.inverse ? props.theme.palette.common.white : props.theme.palette.primary.contrastText};
`;

const MenuBtn = styled(MenuIcon)`
  cursor: pointer;
  position: absolute;
`;

const Case = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-left: -25px;
  color: white;
  ${props => props.inverse && 'color: inherit'};
  ${props => props.inverse && 'margin-left: 0px'};
`;

const Logo = (props) => {
  return (
    <Base {...props}>
      {props.drawers &&
      <IconButton>
        <MenuBtn />
      </IconButton>
      }
      <Case inverse={props.inverse}>
        ditate.Me <Beta inverse={props.inverse}>Beta</Beta>
      </Case>
    </Base>
  );
};

export default Logo;
