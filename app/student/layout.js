

import { Providers } from "../providers";

export const metadata = {
  title: 'Student',
  description: '',
};

export default function RootLayout({ children }) {
  return <Providers>{children}</Providers>;
}
