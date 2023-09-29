import { PageLayout } from '@/components/Layout';
import { Heading } from '@chakra-ui/react';


export default async function Instructor() {
  return (
    <PageLayout>
      <Heading mb='5' as='h4' size='lg' textAlign='center'>
        Instructor
      </Heading>
    </PageLayout>
  );
}
