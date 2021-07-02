import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import { Autocomplete } from '@material-ui/lab';
import { FilterList } from '@material-ui/icons';
import { TextField, Drawer, Typography, Button } from '@material-ui/core';
import { AirtableContext } from '../airtable/context';
import { useForm } from 'react-hook-form';

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
  const { handleSubmit, setValue } = useForm();

  const applyFilter = form => {
    setFilters(form);
  };

  return (
    <Base key={anchor} anchor={anchor} open={open} onClose={onClose}>
      <Header>
        <FilterList />
        Фильтры
      </Header>
      <form onSubmit={handleSubmit(applyFilter)}>
        <Calendar setValue={setValue} />
        <Autocomplete
          multiple
          options={state.events ? state.events : []}
          getOptionLabel={option => option.name}
          onChange={(_, values) => {
            setValue('practices', [...values]);
          }}
          renderInput={params => <Input {...params} label="Все практики" />}
        />
        <Autocomplete
          multiple
          options={state.teachers ? state.teachers : []}
          getOptionLabel={option => option.name}
          onChange={(_, values) => {
            setValue('teachers', [...values]);
          }}
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
