import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PracticeCard from '../../components/Practices/PracticeCard';

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight + 16}px;
`;

const Practices = () => {
  return (
    <Base>
      <Link style={{ textDecoration: 'none' }} to="practiceID">
        <PracticeCard />
      </Link>
    </Base>
  );
};

export default Practices;
