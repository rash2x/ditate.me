import { Container } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import PracticeCard from '../../components/Practices/PracticeCard';

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight + 16}px;
`;

const Practices = () => {
  return (
    <Base>
      <PracticeCard />
    </Base>
  );
};

export default Practices;
