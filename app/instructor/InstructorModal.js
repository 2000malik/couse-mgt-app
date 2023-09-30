import { AppContext } from '../context';
import { Box, ModalBody, ModalFooter, ModalHeader } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { StyledButton } from '@/components/Button';
import { StyledInputBox } from '@/components/InputBox';
import { StyledModal } from '@/components/Modal';

export const InstructorModal = ({ isOpen, onClose }) => {
  const { instructor, setInstructor } = useContext(AppContext);
  const [formData, setFormData] = useState({
    instructor_name: '',
    instructor_dept: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOnSubmit = () => {
    // Create a new array or modify the existing one
    const newArray = [...instructor, formData];
    setInstructor(newArray); // Update the state
    onClose(); //close modal
    setFormData();
  };
  useEffect(() => {
    const { instructor_name, instructor_dept } = formData;
    if (instructor_name && instructor_dept) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [formData]);

  return (
    <StyledModal isOpen={isOpen} onClose={onClose} hasCloseButton={true} p='5'>
      <ModalHeader p='0' textAlign='center' fontSize='lg' mb='5'>
        Register New Instructor
      </ModalHeader>
      <form onSubmit={handleOnSubmit}>
        <ModalBody>
          <Box mb='5'>
            <StyledInputBox
              label={"Instructor's Name"}
              type='text'
              name={'instructor_name'}
              value={formData.instructor_name}
              handleOnChange={handleOnChange}
              placeholder={"Enter Instructor's Name"}
              isRequired={true}
            />
          </Box>
          <Box mb='5'>
            <StyledInputBox
              label='Department'
              type='text'
              name={'instructor_dept'}
              value={formData.instructor_dept}
              handleOnChange={handleOnChange}
              placeholder='Enter Department'
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
            Create
          </StyledButton>
        </ModalFooter>
      </form>
    </StyledModal>
  );
};
