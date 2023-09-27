

import { Providers } from "../providers";

export const metadata = {
  title: 'Dashboard',
  description: '',
};

export default function RootLayout({ children }) {
  return <Providers>{children}</Providers>;
}
