'use client'
import { CreateNewItem } from '@/components/Card/CreateNewItem';
import { PageLayout } from '@/components/Layout';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { Fragment } from 'react';
import { CourseModal } from '../page';

export default function Instructor() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Fragment>
      <PageLayout>
        <Flex flexDir={{ base: 'column', md: 'initial' }}>
          <CreateNewItem title='Create New Instructor' handleOnClick={onOpen} />
        </Flex>
      </PageLayout>
      {isOpen && <CourseModal isOpen={isOpen} onClose={onClose} />}
    </Fragment>
  );
}
