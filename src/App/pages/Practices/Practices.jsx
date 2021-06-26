import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import PracticeCard from '../../components/PracticeCard.jsx';

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight + 16}px;
`;

const Practices = () => {
  return (
    <Base component={Link} to="practiceID">
      <PracticeCard />
    </Base>
  );
};

export default Practices;
