import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';

export const StyledModal = ({ children, isOpen, onClose, hasCloseButton = false, ...props }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' size='xl' {...props}>
      <ModalOverlay />
      <ModalContent borderRadius='20px' bg='white' justifyContent='center' {...props}>
        {hasCloseButton && <ModalCloseButton />}
        {children}
      </ModalContent>
    </Modal>
  );
};
