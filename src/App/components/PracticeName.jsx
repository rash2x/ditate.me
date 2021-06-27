import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Base = styled(Typography)`
  width: max-content;
  padding: 0 4px;
  color: #84ffff;
  background: rgba(132, 255, 255, 0.2);
  border-radius: 4px;
  font-size: ${props => props.theme.typography.fontSize}px;
`;

const PracticeName = () => {
  return (
    <Base variant="h2" component="h2">
      Даосские практики
    </Base>
  );
};

export default PracticeName;
