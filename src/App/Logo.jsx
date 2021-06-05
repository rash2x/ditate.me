import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  font-size: 1.8rem;
  font-weight: ${props => props.theme.typography.fontWeightBold};
  text-transform: none;
  cursor: default;

  ${props => props.inverse && 'color: inherit'};
`;

const Beta = styled.div`
  background: ${props => props.inverse ?
          props.theme.palette.common.black :
          props.theme.palette.primary.main};
  border-radius: 2px;
  padding: 0 6px;
  display: inline-block;

  position: relative;
  top: -2px;
  left: 2px;

  font-size: 1.3rem;
  font-weight: ${props => props.theme.typography.fontWeightBold};
  color: ${props => props.inverse ? props.theme.palette.common.white : props.theme.palette.primary.contrastText};
`;


const Logo = (props) => {
    return (
        <Base {...props}>
            ditate.Me <Beta inverse={props.inverse}>Beta</Beta>
        </Base>
    );
};

export default Logo;
