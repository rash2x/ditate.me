import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Autocomplete } from '@material-ui/lab';
import { FilterList } from '@material-ui/icons';
import { TextField, Drawer, Typography, Button } from '@material-ui/core';
import { AirtableContext } from '../airtable/context';
import Calendar from './Calendar';

const Base = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #fff59d;
    padding: 16px;
    color: black;
  }
`;

const Header = styled(Typography).attrs({
  variant: 'h3',
})`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(3)}px;
  .MuiSvgIcon-root {
    margin-right: ${props => props.theme.spacing(2)}px;
  }
`;

const Input = styled(TextField).attrs({
  variant: 'outlined',
  margin: 'normal',
  fullWidth: true,
})``;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing(3)}px;
`;

const Reset = styled(Button).attrs({ size: 'medium', color: 'secondary', variant: 'outlined' })``;
const Submit = styled(Button).attrs({ size: 'medium', color: 'secondary', variant: 'contained' })``;

const FilterForm = ({ anchor, open, onClose, setFilters }) => {
  const [state] = useContext(AirtableContext);
  const { handleSubmit, setValue, register } = useForm();

  const applyFilter = form => {
    setFilters(form);
  };

  const handleDateChange = useCallback(
    value => {
      setValue('date', value);
    },
    [setValue],
  );

  return (
    <Base key={anchor} anchor={anchor} open={open} onClose={onClose}>
      <Header>
        <FilterList />
        Фильтры
      </Header>
      <form onSubmit={handleSubmit(applyFilter)}>
        <Calendar onChange={handleDateChange} inputRef={register} name="date" />
        <Autocomplete
          multiple
          name="practices"
          inputRef={register}
          options={state.events ? state.events : []}
          getOptionLabel={option => option.name}
          renderInput={params => <Input {...params} label="Все практики" />}
        />
        <Autocomplete
          multiple
          name="teachers"
          inputRef={register}
          options={state.teachers ? state.teachers : []}
          getOptionLabel={option => option.name}
          renderInput={params => <Input {...params} label="Все минибудды" />}
        />
        <Actions>
          <Reset type="reset">Сбросить</Reset>
          <Submit type="submit">Окей</Submit>
        </Actions>
      </form>
    </Base>
  );
};

export default FilterForm;
