'use client';
import { CreateNewItem } from '@/components/Card/CreateNewItem';
import { PageLayout } from '@/components/Layout';
import { Flex, Heading, useDisclosure } from '@chakra-ui/react';
import React, { Fragment, useContext } from 'react';
import { InstructorModal } from './InstructorModal';
import { InstructorProfileCard } from './InstructorProfileCard';
import { AppContext } from '../context';

export default function Instructor() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { instructor } = useContext(AppContext);
  return (
    <Fragment>
      <PageLayout>
        <Flex flexDir={{ base: 'column', md: 'initial' }}>
          <CreateNewItem title='Create New Instructor' handleOnClick={onOpen} />
        </Flex>
        {instructor.length > 0 && (
          <Fragment>
            <Heading variant='h5' my='3'>
              Instructors
            </Heading>
            <Flex flexWrap='wrap' w='full'>
              {React.Children.toArray(
                instructor.map(({ instructor_name, instructor_dept }) => (
                  <InstructorProfileCard name={instructor_name} dept={instructor_dept} />
                ))
              )}
            </Flex>
          </Fragment>
        )}
      </PageLayout>
      {isOpen && <InstructorModal isOpen={isOpen} onClose={onClose} />}
    </Fragment>
  );
}
