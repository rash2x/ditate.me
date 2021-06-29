import { createContext } from 'react';

export const initialState = {
  teachers: null,
  practices: null,
  meditations: null,
  currentTeacher: null,
  practicesEvent: null,
  events: null,
};

export const AirtableContext = createContext(initialState);
