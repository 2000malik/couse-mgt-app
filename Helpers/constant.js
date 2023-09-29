import { Course, Dashboard, Instructors, Profile, Settings, Students } from '@/components/Icons';

export const navItems = [
  { label: 'Dashboard', path: '/', hasSubMenu: false, icon: <Dashboard /> },
  { label: 'Student List ', path: '/student', hasSubMenu: false, icon: <Students /> },
  { label: 'Courses  ', path: '/courses', hasSubMenu: false, icon: <Course /> },
  { label: 'Instructors ', path: '/instructors', hasSubMenu: false, icon: <Instructors /> },
  {
    label: 'Settings ',
    path: '#',
    hasSubMenu: true,
    icon: <Settings />,
    subMenu: [
      { label: 'profile ', path: '/settings/profile', icon: <Profile /> },
      { label: 'Settings ', path: '/settings', icon: <Students /> },
    ],
  },
];
