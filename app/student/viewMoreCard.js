import { StyledModal } from '@/components/Modal';
import { Box, Flex, ModalHeader, Text } from '@chakra-ui/react';

export const ViewMoreCard = ({ isOpen, onClose, data }) => {
  const { address, company, website } = data;
  return (
    <StyledModal isOpen={isOpen} onClose={onClose} hasCloseButton={true} p='5'>
      <ModalHeader p='0' textAlign='center' fontSize='lg' mb='5'>
        view more Info
      </ModalHeader>
      <Flex flexWrap='wrap' justifyContent='space-between' w='full'>
        <Box mb={{ base: '5' }}>
          <Text fontSize='md' fontWeight='normal'>
            Website
          </Text>
          <Text fontSize='sm' fontWeight='normal'>
            {website}
          </Text>
        </Box>
        <Box>
          <Text fontSize='md' fontWeight='normal'>
            Address
          </Text>
          <Text fontSize='sm' fontWeight='normal'>
            {address?.street ?? '-'}
          </Text>
        </Box>
        <Box>
          <Text fontSize='md' fontWeight='normal'>
            Company
          </Text>
          <Text fontSize='sm' fontWeight='normal'>
            {company?.name ?? '-'}
          </Text>
        </Box>
      </Flex>
    </StyledModal>
  );
};
