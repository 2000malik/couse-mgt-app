'use client';
import { CreateNewItem } from '@/components/Card/CreateNewItem';
import { PageLayout } from '@/components/Layout';
import { Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { Fragment } from 'react';
import { InstructorModal } from './InstructorModal';
import { InstructorProfileCard } from './InstructorProfileCard';

export default function Instructor() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Fragment>
      <PageLayout>
        <Flex flexDir={{ base: 'column', md: 'initial' }}>
          <CreateNewItem title='Create New Instructor' handleOnClick={onOpen} />
        </Flex>
        <Heading variant='h5' my='3'>
          Instructors
        </Heading>
        <Flex flexWrap='wrap' justifyContent='space-between' w='full'>
          <InstructorProfileCard />
        </Flex>
      </PageLayout>
      {isOpen && <InstructorModal isOpen={isOpen} onClose={onClose} />}
    </Fragment>
  );
}
