'use client';
import { createContext, useState } from 'react';

export const AppContext = createContext({});

export default function AppContainer({ children }) {
  const [Course, setCourse] = useState([]);
  const [instructor, setInstructor] = useState([]);
  const [userProfile, setUserProfile] = useState({
    name: 'Malik ojo',
    userId: Date.now(),
    email: 'malikkorede99@gmail.com',
    phoneNumber: '+2348141258672',
  });

  return (
    <AppContext.Provider
      value={{ Course, setCourse, instructor, setInstructor, userProfile, setUserProfile }}>
      {children}
    </AppContext.Provider>
  );
}
