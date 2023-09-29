import { StyledModal } from '@/components/Modal';
import { ModalHeader, Text } from '@chakra-ui/react';


export const ViewMoreCard = ({ isOpen, onClose }) => {
  return (
    <StyledModal isOpen={isOpen} onClose={onClose} hasCloseButton={true} p='5'>
      <ModalHeader p='0' textAlign='center' fontSize='lg' mb='5'>
        view more Info
      </ModalHeader>
      <Text>To populate user info here</Text>
    </StyledModal>
  );
};
