import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import PracticeCard from '../../components/PracticeCard.jsx';

const Base = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: ${props => props.theme.mixins.toolbar.minHeight + 16}px;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const Practices = () => {
  return (
    <Base>
      <PracticeCard />
    </Base>
  );
};

export default Practices;
