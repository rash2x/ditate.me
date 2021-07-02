import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Fab } from '@material-ui/core';
import PracticeCard from '../../components/PracticeCard.jsx';
import { AirtableContext } from '../../airtable/context.jsx';
import HomeToolbar from '../../components/HomeToolbar';
import NavigationBar from '../../components/NavigationBar';
import { useRouter } from '../../hooks/useRouter.jsx';
import { FilterList } from '@material-ui/icons';
import FilterForm from '../../components/FilterForm.jsx';

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

const FilterFab = styled(Fab).attrs({
  color: 'primary',
  size: 'medium',
})`
  position: absolute;
  right: 50%;
  bottom: 28px;
  transform: translate(50%);
`;

const Practices = () => {
  const router = useRouter();
  const [state] = useContext(AirtableContext);
  const [drawers, setDrawer] = React.useState(false);
  const [filters, setFilters] = React.useState({ date: '', practices: [], teachers: [] });

  const toggleDrawer = open => () => {
    setDrawer(open);
  };

  return (
    <>
      <HomeToolbar />
      <Base>
        {state.events ? (
          state.events.map(event => <PracticeCard key={event.id} {...event} />)
        ) : (
          <></>
        )}
      </Base>

      <NavigationBar>
        {router.pathname.includes('/practices') && (
          <FilterFab onClick={toggleDrawer(true)}>
            <FilterList />
          </FilterFab>
        )}
        <FilterForm
          anchor="bottom"
          open={drawers}
          onClose={toggleDrawer(false)}
          setFilters={setFilters}
        />
      </NavigationBar>
    </>
  );
};

export default Practices;
