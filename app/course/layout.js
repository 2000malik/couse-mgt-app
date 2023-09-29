

import { Providers } from "../providers";

export const metadata = {
  title: 'Course',
  description: '',
};

export default function RootLayout({ children }) {
  return <Providers>{children}</Providers>;
}
