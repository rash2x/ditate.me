import React, { useContext } from 'react';
import styled from 'styled-components';
import Calendar from '../Calendar/Calendar';
import { Autocomplete } from '@material-ui/lab';
import { FilterList } from '@material-ui/icons';
import { TextField, Drawer, Typography, Button } from '@material-ui/core';
import { AirtableContext } from '../../airtable/context';
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
})`
  .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,
  .Mui-focused,
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.palette.background.paper};
  }

  .MuiInputBase-root {
    color: black;
  }

  .MuiOutlinedInput-input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px #fff59d inset;
    -webkit-text-fill-color: black;
    caret-color: black;
  }

  .MuiFormHelperText-root:not(.Mui-error),
  .MuiFormLabel-root:not(.Mui-error) {
    color: inherit;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing(3)}px;
`;

const FilterForm = ({ anchor, open, onClose }) => {
  const [state] = useContext(AirtableContext);
  const { handleSubmit, setValue } = useForm();

  const applyFilter = form => {};

  return (
    <Base key={anchor} anchor={anchor} open={open} onClose={onClose} onOpen={open}>
      <Header>
        <FilterList />
        Фильтры
      </Header>
      <form onSubmit={handleSubmit(applyFilter)}>
        <Calendar setValue={setValue} />
        <Autocomplete
          multiple
          options={state.practices ? state.practices : []}
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
        <Wrapper>
          <Button type="reset" size="medium" color="secondary" variant="outlined">
            Сбросить
          </Button>
          <Button type="submit" size="medium" color="secondary" variant="contained">
            Окей
          </Button>
        </Wrapper>
      </form>
    </Base>
  );
};

export default FilterForm;
