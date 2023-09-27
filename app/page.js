'use client';
import { StyledButton } from '@/components/Button';
import { StyledCard } from '@/components/Card';
import { StyledInputBox } from '@/components/InputBox';
import { PageLayout } from '@/components/Layout';
import { StyledModal } from '@/components/Modal';
import { NewCourseButton } from '@/components/NewCourseButton';
import { StyledTable } from '@/components/Table';

import {
  Box,
  Flex,
  Heading,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@chakra-ui/react';

import { Fragment, useContext, useEffect, useState } from 'react';
import { CourseContext } from './context/course';

export default function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { Course } = useContext(CourseContext);
  return (
    <Fragment>
      <PageLayout>
        <Flex flexDir={{ base: 'column', md: 'initial' }}>
          <StyledCard
            border='1px solid #e2e8f0'
            bg='white'
            size='lg'
            px={{ base: '4', md: '6' }}
            py={{ base: '4', md: '7' }}
            width={{ base: 'full', md: 'calc((100% /2) - 16px)' }}
            mr={{ base: 'unset', md: '4' }}
            mb={{ base: '4', md: 'unset' }}>
            <Flex justify='space-between' mb='4'>
              <Box>
                <Heading mt='2' size='md' fontWeight='bold' fontSize={{ base: 'md', md: 'xl' }}>
                  Create Course
                </Heading>
              </Box>
              <Box>
                <NewCourseButton handleOnClick={onOpen} />
              </Box>
            </Flex>
          </StyledCard>
        </Flex>
        {Course.length > 0 && (
          <Box mt='5'>
            <StyledTable tableData={Course} />
          </Box>
        )}
      </PageLayout>
      {isOpen && <CourseModal isOpen={isOpen} onClose={onClose} />}
    </Fragment>
  );
}

export const CourseModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    course_name: '',
    course_id: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const { Course, setCourse } = useContext(CourseContext);

  const handleOnSubmit = () => {
    // Create a new array or modify the existing one
    const newArray = [...Course, formData];
    setCourse(newArray); // Update the state
    onClose(); //close modal
    setFormData();
  };
  useEffect(() => {
    const { course_name, course_id } = formData;
    if (course_name && course_id) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [formData]);

  return (
    <StyledModal isOpen={isOpen} onClose={onClose} hasCloseButton={true} p='5'>
      <ModalHeader p='0' textAlign='center' fontSize='lg' mb='5'>
        Register New Course
      </ModalHeader>
      <form onSubmit={handleOnSubmit}>
        <ModalBody>
          <Box mb='5'>
            <StyledInputBox
              label='Course Name'
              type='text'
              name={'course_name'}
              value={formData.course_name}
              handleOnChange={handleOnChange}
              placeholder='Enter Course Name'
              isRequired={true}
            />
          </Box>
          <Box mb='5'>
            <StyledInputBox
              label='Course ID'
              type='text'
              name={'course_id'}
              value={formData.course_id}
              handleOnChange={handleOnChange}
              placeholder='Enter Course ID'
              isRequired={true}
            />
          </Box>
        </ModalBody>
        <ModalFooter mt='5'>
          <StyledButton
            handleOnClick={handleOnSubmit}
            fontSize='16px'
            fontWeight='400'
            color='white'
            bg='background'
            disabled={isButtonDisabled}
            w='full'>
            Submit
          </StyledButton>
        </ModalFooter>
      </form>
    </StyledModal>
  );
};
