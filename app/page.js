'use client';
import { StyledButton } from '@/components/Button';
import { StyledInputBox } from '@/components/InputBox';
import { PageLayout } from '@/components/Layout';
import { StyledModal } from '@/components/Modal';
import { StyledTable } from '@/components/Table';

import { Box, Flex, ModalBody, ModalFooter, ModalHeader, useDisclosure } from '@chakra-ui/react';

import { Fragment, useContext, useEffect, useState } from 'react';
import { CourseContext } from './context/course';
import { CreateNewItem } from '@/components/Card/CreateNewItem';

export default function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { Course } = useContext(CourseContext);
  return (
    <Fragment>
      <PageLayout>
        <Flex flexDir={{ base: 'column', md: 'initial' }}>
          <CreateNewItem title='Create Course' handleOnClick={onOpen} />
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
