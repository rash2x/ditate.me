import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { AirtableContext } from '../../airtable/context';
import { FormControl, InputLabel, Select, TextField } from '@material-ui/core';

const StyledButton = styled(Button)`
  margin: 60px auto;
  background: #2f3237;
  border-radius: 3px;
  border: 1px black;
  padding: 8px 16px 8px 16px;
  color: white;
  width: 212px;
  text-transform: none;
  font-size: 15px;

  :hover {
    background: #181a1c;
  }
`;

const Controller = styled(FormControl)`
  .MuiOutlinedInput-notchedOutline{
    border-color: black;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
    border-color: black;
    border-width: 1px;
  }
  .MuiSelect-icon{
    color: black;
  }
  .MuiInputBase-root{
    color: black;
  }
  .MuiFormLabel-root{
    color: black;
    background: #FFF59D;
    padding: 0 5px 0 5px;
    left: -5px;
  }
  margin-top: 33px;
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
  
  .MuiOutlinedInput-input:-webkit-autofill{
    -webkit-box-shadow: 0 0 0 100px #FFF59D inset;
    -webkit-text-fill-color: black;
  }
  
  margin-top: 33px;
`

const Label = styled.label`
  margin-top: 4px;
  margin-left: 10px;
  font-size: 12px;
  opacity: 0.8;
`;

const RegistrationForm = ({ onSubmit }) => {

  const [state,] = useContext(AirtableContext);

  const { register, formState: { errors }, handleSubmit } = useForm();

  return (
    <form style={{ display: 'flex', flexDirection: "column" }} onSubmit={handleSubmit(onSubmit)}>

      <Input id="outlined-basic"
             label="Как вас зовут ?"
             variant="outlined"
             {...register("name", { required: true })}
      />
      <Input id="outlined-basic"
             label="С какого вы города ?"
             variant="outlined"
             {...register("citi", { required: true })}
      />

      <Controller variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Какие практики вы преподаете ?</InputLabel>
        <Select {...register("practices")} native>
          {
            state.practices.map(practices => (
              <option style={{color: "black"}} value={practices.fields.Name}>
                {practices.fields.Name}
              </option>
            ))
          }
        </Select>
      </Controller>

      <Label>Выберите из списка или добавьте свои</Label>


      <Input id="outlined-basic"
             label="Aккаунт Telegram или Instagram" variant="outlined"
             {...register("contact", { required: true })} />

      <Button style={{width: "212px", margin: "57px auto"}} color="secondary" type="submit" size="medium" variant="contained">
        👉 Добавить профиль
      </Button>
    </form>
  );
};


export default RegistrationForm;
