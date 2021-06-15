import { createContext } from 'react';

export const initialState = {
  teachers: null,
  practices: null,
  meditations: null,
  currentTeacher: null
};

export const AirtableContext = createContext(initialState);
