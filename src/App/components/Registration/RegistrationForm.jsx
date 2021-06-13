import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { AirtableContext } from '../../airtable/context';

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

const Inputs = styled.input`
  background: ${props => props.theme.palette.primary.main};
  border-radius: 4px;
  color: black;
  padding: 15px;
  border: 1px solid black;
  margin-top: 30px;
  font-size: 16px;
  outline: none;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${props => props.theme.palette.primary.main} inset !important;
  }

  ::placeholder {
    color: black;
  }
`;

const Form = styled.form`
  display: grid;
`;

const Error = styled.label`
  color: red;
  font-size: 15px;
`;

const SelectPractice = styled.select`
  font-size: 16px;
  margin-top: 30px;
  padding: 15px 10px 15px 10px;
  border-radius: 4px;
  background: ${props => props.theme.palette.primary.main};
  border: 1px solid black;
  outline: none;
`;

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
    <Form style={{ display: 'grid' }} onSubmit={handleSubmit(onSubmit)}>

      <Inputs placeholder="Как вас зовут ?" {...register('name', { required: true })} />
      <Error>{errors.name?.type === 'required' && 'Name is required'}</Error>

      <Inputs placeholder="С какого вы города ?" {...register('citi', { required: true })} />
      <Error>{errors.citi?.type === 'required' && 'Name is required'}</Error>

      <SelectPractice placeholder="fefe" {...register('practices')}>
        <option value disabled selected>Какие практики вы преподаете ?</option>
        {
          state.practices.map(practices => {
            return <option value={practices.fields.Name}>
              {practices.fields.Name}
            </option>;
          })
        }
      </SelectPractice>
      <Label htmlFor={SelectPractice}>Выберите из списка или добавьте свои</Label>

      <Inputs placeholder="Аккаунт Telegram или Instagram" {...register('contact', { required: true })} />
      <Label htmlFor={Inputs}>Например @anikoyoga</Label>
      <Error>{errors.contact?.type === 'required' && 'Name is required'}</Error>


      <StyledButton type="submit" size="large" variant="contained">
        👉 Добавить профиль
      </StyledButton>
    </Form>
  );
};


export default RegistrationForm;
