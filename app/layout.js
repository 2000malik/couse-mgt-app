import CourseProvider from './context/course';
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
          <CourseProvider>{children}</CourseProvider>
        </Providers>
      </body>
    </html>
  );
}
