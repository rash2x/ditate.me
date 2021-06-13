import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  cursor: default;
  font-size: 1.8rem;
  font-weight: ${props => props.theme.typography.fontWeightBold};
`;

const Beta = styled.div`
  background: ${props => props.inverse ?
          props.theme.palette.common.black :
          props.theme.palette.primary.main};
  border-radius: 2px;

  display: inline-block;
  padding: 0 6px;
  position: relative;
  left: 2px;
  top: -2px;

  font-size: 1.3rem;
  font-weight: ${props => props.theme.typography.fontWeightBold};
  color: ${props => props.inverse ? props.theme.palette.common.white : props.theme.palette.primary.contrastText};
`;

const Case = styled.div`
  margin-left: -45px;
  ${props => props.inverse && 'margin-left: 0'}
`;

const Logo = (props) => {
  return (
    <Base {...props}>
      <Case inverse={props.inverse}>
        ditate.Me <Beta inverse={props.inverse}>Beta</Beta>
      </Case>
    </Base>
  );
};

export default Logo;
