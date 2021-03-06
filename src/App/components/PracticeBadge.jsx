import React from 'react';
import styled from 'styled-components';
import { fade, Typography } from '@material-ui/core';

const Base = styled(Typography).attrs({ variant: 'subtitle2', component: 'div' })`
  display: inline-flex;
  align-items: center;
  padding: 3px 6px 1px;
  color: #84ffff;
  background: rgba(132, 255, 255, 0.2);
  border-radius: 4px;
`;

const PracticeBadge = ({ name, color }) => (
  <Base
    style={{
      backgroundColor: fade(color, 0.2),
      color,
    }}
  >
    {name}
  </Base>
);

export default PracticeBadge;
