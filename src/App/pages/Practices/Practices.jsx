import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import PracticeCard from '../../components/PracticeCard.jsx';
import { AirtableContext } from '../../airtable/context.jsx';

const Base = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: ${props => props.theme.mixins.toolbar.minHeight + 16}px;
  padding-bottom: ${props => props.theme.mixins.toolbar.minHeight}px;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Practices = () => {
  const [state] = useContext(AirtableContext);

  return (
    <Base>
      {state.events && state.events.map(event => <PracticeCard key={event.id} {...event} />)}
    </Base>
  );
};

export default Practices;
