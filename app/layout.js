import AppProvider from './context'; // for context states vales & updaters
import { Providers } from './providers';

export const metadata = {
  title: 'Course management app',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <AppProvider>{children}</AppProvider>
        </Providers>
      </body>
    </html>
  );
}
