import { Providers } from '../providers';

export const metadata = {
  title: 'Instructor',
  description: '',
};
export default function RootLayout ({children}) {
  return <Providers>{children}</Providers>;
};
