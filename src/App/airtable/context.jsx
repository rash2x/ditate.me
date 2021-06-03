import { createContext } from 'react';

const initialValue = {
  teachers: [],
  practices: [],
  meditations: []
}

export const AirtableContext = createContext(initialValue);
