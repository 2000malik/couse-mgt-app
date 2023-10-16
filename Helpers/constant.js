import { Course, Dashboard, Instructors, Profile, Settings, Students } from '@/components/Icons';

export const navItems = [
  { label: 'Dashboard', path: '/', hasSubMenu: false, icon: <Dashboard /> },
  { label: 'Student List ', path: '/student', hasSubMenu: false, icon: <Students /> },
  {
    label: 'Courses  ',
    path: '/course',
    hasSubMenu: true,
    icon: <Course />,
    subMenu: [
      { label: 'Lesson ', path: '#', icon: <Profile /> },
      { label: 'Test ', path: '#', icon: <Students /> },
    ],
  },
  { label: 'Instructors', path: '/instructor', hasSubMenu: false, icon: <Instructors /> },
  {
    label: 'Settings ',
    path: '/settings',
    hasSubMenu: false,
    icon: <Settings />,
  },
];
