import { Providers } from '../providers';

export const metadata = {
  title: 'Settings',
  description: '',
};
export default function RootLayout ({children}) {
  return <Providers>{children}</Providers>;
};
