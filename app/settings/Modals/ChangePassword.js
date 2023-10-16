import { StyledButton } from '@/components/Button';
import { StyledInputBox } from '@/components/InputBox';
import { StyledModal } from '@/components/Modal';
import { Box, ModalBody, ModalFooter, ModalHeader } from '@chakra-ui/react';


export const ChangePassword = ({ isOpen, onClose }) => {
  return (
    <StyledModal isOpen={isOpen} onClose={onClose} hasCloseButton={true} p='5'>
      <ModalHeader p='0' textAlign='center' fontSize='lg' mb='5'>
        Change your password
      </ModalHeader>
      <form
      //   onSubmit={handleOnSubmit}
      >
        <ModalBody>
          <Box mb='5'>
            <StyledInputBox
              label={'Enter Old Password'}
              type='password'
              name={'instructor_name'}
              //   value={formData.instructor_name}
              //   handleOnChange={handleOnChange}
              placeholder={'Enter Old Password'}
              isRequired={true}
            />
          </Box>
          <Box mb='5'>
            <StyledInputBox
              label='Enter New Password'
              type='text'
              name={'instructor_dept'}
              //   value={formData.instructor_dept}
              //   handleOnChange={handleOnChange}
              placeholder='Enter New Password'
              isRequired={true}
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
            // handleOnClick={handleOnSubmit}
            fontSize='16px'
            fontWeight='400'
            color='white'
            bg='background'
            disabled
            w='full'>
            Update
          </StyledButton>
        </ModalFooter>
      </form>
    </StyledModal>
  );
};
