import React, { useCallback, useContext } from 'react';

import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { AirtableContext } from '../../airtable/context';


const StyledForm = styled.form`
  text-align: center;
`;

const Input = styled(TextField).attrs({
  variant: 'outlined',
  margin: 'normal',
  fullWidth: true
})`

  // .MuiOutlinedInput-notchedOutline,
  // .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,
  // .Mui-focused,
  // .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
  //   border-color: ${props => props.theme.palette.background.paper}
  // }

  // .MuiInputBase-root {
  //   color: black
  // }

  // .MuiOutlinedInput-input:-webkit-autofill {
  //   -webkit-box-shadow: 0 0 0 100px #FFF59D inset;
  //   -webkit-text-fill-color: black;
  //   caret-color: black;
  // }

  // .MuiFormHelperText-root:not(.Mui-error),
  // .MuiFormLabel-root:not(.Mui-error) {
  //   color: inherit;
  // }
`;

const StyledButton = styled(Button)`
  margin-top: 40px;
`;

const Form = ({ onSubmit }) => {
  const { register, formState: { errors }, handleSubmit, setValue } = useForm();
  const [state,] = useContext(AirtableContext);
  const requiredMessage = ' важное поле';

  const handleCreateProfile = useCallback((form) => {
    onSubmit(form);
  }, [onSubmit])

  return (
    <StyledForm onSubmit={handleSubmit(handleCreateProfile)}>
      <Input label="Как вас зовут?"
             {...register('name', { required: true })}
             error={!!errors.name}
             helperText={errors.name && 'Имя' + requiredMessage}
      />

      <Input label="С какого вы города?"
             {...register('city', { required: true })}
             error={!!errors.city}
             helperText={errors.city && 'Город' + requiredMessage}
      />

      <Autocomplete
        multiple
        options={state.practices ? state.practices : []}
        getOptionLabel={(option) => option.name}
        onChange={(_, values) => {
          setValue('practices', [...values]);
        }}
        renderInput={(params) => (
          <Input
            {...params}
            label="Какие практики вы преподаете?"
            {...register('practices', { required: true })}
            error={!!errors.practices}
            helperText={errors.contact ? 'Практики' + requiredMessage :
              <label>Выберите из списка или добавьте свои</label>}
          />
        )}
      />

      <Input label="Aккаунт Telegram или Instagram"
             {...register('contact', { required: true })}
             error={!!errors.contact}
             helperText={errors.contact ? 'Аккаунт' + requiredMessage : <label>Например @anikoyoga</label>}
      />


      <StyledButton type="submit" size="medium" color="secondary" variant="contained">
        👉 Добавить профиль
      </StyledButton>


    </StyledForm>
  );
};


export default Form;
