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
      { label: 'Lesson ', path: '/course/lesson', icon: <Profile /> },
      { label: 'Test ', path: '/course/test', icon: <Students /> },
    ],
  },
  { label: 'Instructors', path: '/instructor', hasSubMenu: false, icon: <Instructors /> },
  {
    label: 'Settings ',
    path: '/settings',
    hasSubMenu: true,
    icon: <Settings />,
    subMenu: [
      { label: 'profile ', path: '/settings/profile', icon: <Profile /> },
      // { label: 'Settings ', path: '/settings', icon: <Students /> },
    ],
  },
];
