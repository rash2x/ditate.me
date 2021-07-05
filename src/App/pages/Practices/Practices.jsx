import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Fab } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import PracticeCard from '../../components/PracticeCard';
import { AirtableContext } from '../../airtable/context';
import HomeToolbar from '../../components/HomeToolbar';
import NavigationBar from '../../components/NavigationBar';
import useRouter from '../../hooks/useRouter';
import FilterForm from '../../components/FilterForm';

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
  const [filteredEvents, setFilteredEvents] = React.useState([]);

  const toggleDrawer = open => () => {
    setDrawer(open);
  };

  // useEffect(() => {
  //   // if (state.events !== null && filters.practices) {
  //   //   let result = state.events.filter(e => {
  //   //     return filters.practices.indexOf(e);
  //   //   });

  //   //   setFilteredEvents(result);
  //   // } else return null;
  //   if (state.events !== null && filters.teachers) {
  //     let result = filters.teachers.map(teacher =>
  //       state.events.filter(event => event.teacherName === teacher.teacherName),
  //     );
  //     setFilteredEvents(result);
  //   } else return null;
  // }, [filters, state.events]);

  // console.log(filteredEvents);

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
