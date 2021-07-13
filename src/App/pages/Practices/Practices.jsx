import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import PracticeCard from '../../components/PracticeCard';
import { AirtableContext } from '../../airtable/context';
import HomeToolbar from '../../components/HomeToolbar';
import NavigationBar from '../../components/NavigationBar';
import { getActualEvents } from '../../airtable/services';
import NoPractices from '../NoPractices/NoPractices';

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
    <>
      <HomeToolbar />
      <Base>
        {getActualEvents(state.events) ? (
          getActualEvents(state.events).map(event => <PracticeCard key={event.id} {...event} />)
        ) : (
          <NoPractices />
        )}
        <NoPractices />
      </Base>

      <NavigationBar />
    </>
  );
};

export default Practices;
