'use client';
import { createContext, useState } from 'react';

export const CourseContext = createContext({});

export default function CourseContainer({ children }) {
  const [Course, setCourse] = useState([]);

  return <CourseContext.Provider value={{ Course, setCourse }}>{children}</CourseContext.Provider>;
}
