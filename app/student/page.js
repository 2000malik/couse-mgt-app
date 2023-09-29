import { PageLayout } from '@/components/Layout';
import { Heading } from '@chakra-ui/react';
import { UserTable } from './studentTable';

async function getData() {
  const path = 'https://jsonplaceholder.typicode.com/users';
  const res = await fetch(path, { cache: 'force-cache' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function Student() {
  const data = await getData();

  return (
    <PageLayout>
      <Heading mb='5' as='h4' size='lg' textAlign='center'>
        API CALL EXAMPLE
      </Heading>
      <UserTable usersList={data} />
    </PageLayout>
  );
}

//
