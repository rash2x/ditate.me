import React from 'react';

import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const Input = styled(TextField).attrs({
  variant: 'outlined',
  margin: 'normal'
})`

  .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,
  .Mui-focused,
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.palette.background.paper}
  }

  .MuiInputBase-root {
    color: black
  }

  .MuiOutlinedInput-input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px #FFF59D inset;
    -webkit-text-fill-color: black;
    caret-color: black;
  }

  .MuiFormHelperText-root:not(.Mui-error),
  .MuiFormLabel-root:not(.Mui-error) {
    color: inherit;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(4)}px;
`;

const RegistrationForm = ({ onSubmit, array }) => {

  const { register, formState: { errors }, handleSubmit, setValue } = useForm();

  const requiredMessage = ' важное поле';

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>

      <Input label="Как вас зовут ?"
             {...register('name', { required: true })}
             error={errors.name}
             helperText={errors.citi && 'Имя' + requiredMessage}
      />

      <Input label="С какого вы города ?"
             {...register('citi', { required: true })}
             error={errors.citi}
             helperText={errors.citi && 'Город' + requiredMessage}
      />

      <Autocomplete
        multiple
        options={array}
        onChange={(_, values) => {
          setValue('practices', [...values]);
        }}
        renderInput={(params) => (
          <Input
            {...params}
            label="Какие практики вы преподаете ?"
            {...register('practices', { required: true })}
            error={errors.practices}
            helperText={errors.contact ? 'Практики' + requiredMessage :
              <label>Выберите из списка или добавьте свои</label>}
          />
        )}
      />

      <Input label="Aккаунт Telegram или Instagram"
             {...register('contact', { required: true })}
             error={errors.contact}
             helperText={errors.contact ? 'Аккаунт' + requiredMessage : <label>Например @anikoyoga</label>}
      />

      <Links>
        <Button type="submit" size="medium" color="secondary" variant="contained">
          👉 Добавить профиль
        </Button>
      </Links>

    </form>
  );
};


export default RegistrationForm;
