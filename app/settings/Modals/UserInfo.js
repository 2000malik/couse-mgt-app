import { StyledButton } from '@/components/Button';
import { StyledInputBox } from '@/components/InputBox';
import { StyledModal } from '@/components/Modal';
import { Avatar, Box, ModalBody, ModalFooter, ModalHeader,Center } from '@chakra-ui/react';
import { useState } from 'react';

export const UserInfo = ({ isOpen, onClose }) => {
  const [disabled, setDisabled] = useState(true);
  return (
    <StyledModal isOpen={isOpen} onClose={onClose} hasCloseButton={true} p='5'>
      <ModalHeader p='0' textAlign='center' fontSize='lg' mb='5'>
        My Profile
      </ModalHeader>
      <form
      //   onSubmit={handleOnSubmit}
      >
        <ModalBody>
          <Center mb='5'>
            <Avatar size='xl' name='Malik Ojo' />
          </Center>
          <Box mb='5'>
            <StyledInputBox
              label={'Enter Old Password'}
              type='password'
              name={'instructor_name'}
              //   value={formData.instructor_name}
              //   handleOnChange={handleOnChange}
              placeholder={'Enter Old Password'}
              isRequired={true}
              disabled={disabled}
            />
          </Box>

          <Box mb='5'>
            <StyledInputBox
              label='Confirm New Password'
              type='text'
              name={'instructor_dept'}
              //   value={formData.instructor_dept}
              //   handleOnChange={handleOnChange}
              placeholder='Enter New Password'
              isRequired={true}
            />
          </Box>
        </ModalBody>
        <ModalFooter mt='5'>
          <StyledButton
            handleOnClick={() => setDisabled(false)}
            fontSize='16px'
            fontWeight='400'
            color='white'
            bg='background'
            // disabled
            w='full'>
            Update
          </StyledButton>
        </ModalFooter>
      </form>
    </StyledModal>
  );
};
