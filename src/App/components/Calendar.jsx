import 'date-fns';
import React  from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const Base = styled(KeyboardDatePicker).attrs({
  fullWidth: true,
  variant: 'outlined',
})`
  .MuiIconButton-root {
    color: rgba(0, 0, 0, 0.54);
  }
`;

const Input = styled(TextField).attrs({
  variant: 'outlined',
  margin: 'normal',
  fullWidth: true,
})`
  .MuiOutlinedInput-adornedEnd {
    padding: 0;
  }

  .MuiIconButton-root {
    padding-right: ${props => props.theme.spacing(1)}px;
  }

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

const Calendar = (props) => {
  return (
    <Base
      TextFieldComponent={inputProps => <Input {...inputProps} />}
      autoOk={true}
      emptyLabel="Выберите дату"
      invalidDateMessage="Не верная дата"
      minDateMessage="Нельзя выбрать дату до минимального значения"
      format="dd/MM/yyyy"
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
      {...props}
    />
  );
};

export default Calendar;
