'use client';
import { createContext, useState } from 'react';

export const AppContext = createContext({});

export default function AppContainer({ children }) {
  const [Course, setCourse] = useState([]);
  const [instructor, setInstructor] = useState([]);

  return (
    <AppContext.Provider value={{ Course, setCourse, instructor, setInstructor }}>
      {children}
    </AppContext.Provider>
  );
}
