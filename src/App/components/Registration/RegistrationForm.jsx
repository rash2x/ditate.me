import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { AirtableContext } from '../../airtable/context';
import { FormControl, InputLabel, Select, TextField } from '@material-ui/core';

const Controller = styled(FormControl)`
  .MuiOutlinedInput-notchedOutline {
    border-color: black;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: black;
    border-width: 1px;
  }

  .MuiSelect-icon {
    color: black;
  }

  .MuiInputBase-root {
    color: black;
  }

  .MuiFormLabel-root {
    color: black;
    background: #FFF59D;
    padding: 0 5px 0 5px;
    left: -5px;
  }

  margin-bottom: 33px;
`;

const Input = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border-color: black;
  }

  .MuiInputBase-root {
    color: black
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: black;
    border-width: 1px;
  }

  .Mui-focused {
    border-color: black;
    color: black;
  }

  .MuiFormLabel-root {
    color: black;
  }

  .MuiOutlinedInput-input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px #FFF59D inset;
    -webkit-text-fill-color: black;
  }

  margin-bottom: 33px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: ${props => props.theme.spacing(4)}px;
`;

const RegistrationForm = ({ onSubmit }) => {

  const [state,] = useContext(AirtableContext);

  const { register, formState: { errors }, handleSubmit } = useForm();

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>

      <Input id="outlined-basic"
             label="Как вас зовут ?"
             variant="outlined"
             {...register('name', { required: true })}
      />
      <Input id="outlined-basic"
             label="С какого вы города ?"
             variant="outlined"
             {...register('citi', { required: true })}
      />

      <Controller variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Какие практики вы преподаете ?</InputLabel>
        <Select {...register('practices')} native>
          {
            state.practices.map(practices => (
              <option style={{ color: 'black' }} value={practices.fields.Name}>
                {practices.fields.Name}
              </option>
            ))
          }
        </Select>
      </Controller>

      <Input id="outlined-basic"
             label="Aккаунт Telegram или Instagram" variant="outlined"
             {...register('contact', { required: true })} />
      <Links>
        <Button size="medium" color="secondary" variant="contained">
          👉 Добавить профиль
        </Button>
      </Links>

    </form>
  );
};


export default RegistrationForm;
