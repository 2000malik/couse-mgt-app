import { AppContext } from '@/app/context';
import { StyledButton } from '@/components/Button';
import { StyledInputBox } from '@/components/InputBox';
import { StyledModal } from '@/components/Modal';
import { Avatar, Box, ModalBody, ModalFooter, ModalHeader, Center } from '@chakra-ui/react';
import { useContext, useState } from 'react';

export const UserInfo = ({ isOpen, onClose }) => {
  const { userProfile, setUserProfile } = useContext(AppContext);
  const { name, userId, email, phoneNumber } = userProfile;
  const [formData, setFormData] = useState({
    name: name,
    userId: userId,
    email: email,
    phoneNumber: phoneNumber,
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleOnSubmit = () => {
    const { name, userId, email, phoneNumber } = formData;
    // Copy existing user details and update with the new one
    const newObj = {
      ...userProfile,
      name: name,
      userId: userId,
      email: email,
      phoneNumber: phoneNumber,
    };
    setUserProfile(newObj); // Update the state
    onClose(); //close modal
    setFormData(); //clear value in state
  };
  return (
    <StyledModal isOpen={isOpen} onClose={onClose} hasCloseButton={true} p='5'>
      <ModalHeader p='0' textAlign='center' fontSize='lg' mb='5'>
        My Profile
      </ModalHeader>
      <form onSubmit={handleOnSubmit}>
        <ModalBody>
          <Center mb='5'>
            <Avatar
              size='xl'
              name={userProfile.name}
              src='/assests/images/malik2.jpeg'
              color='white'
            />
          </Center>
          <Box mb='5'>
            <StyledInputBox
              label={'User ID'}
              type='text'
              name={'userId'}
              value={formData.userId}
              handleOnChange={handleOnChange}
              // placeholder={'Enter User ID'}
              isRequired={true}
              disabled
            />
          </Box>

          <Box mb='5'>
            <StyledInputBox
              label='Display Name'
              type='text'
              name={'name'}
              value={formData.name}
              handleOnChange={handleOnChange}
              placeholder='Enter New Password'
              isRequired={true}
            />
          </Box>
          <Box mb='5'>
            <StyledInputBox
              label='Email'
              type='email'
              name={'email'}
              value={formData.email}
              handleOnChange={handleOnChange}
              // placeholder='Enter New Password'
              isRequired={true}
              disabled
            />
          </Box>
          <Box mb='5'>
            <StyledInputBox
              label='Phone Number'
              type='tel'
              name={'phoneNumber'}
              value={formData.phoneNumber}
              handleOnChange={handleOnChange}
              // placeholder='Enter New Password'
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
            w='full'>
            Edit Profile
          </StyledButton>
        </ModalFooter>
      </form>
    </StyledModal>
  );
};
