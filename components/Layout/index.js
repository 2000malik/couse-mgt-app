'use client';
import { Avatar, Box, Button, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { SideBar } from './SideBar';
import { Hamburger } from '../Hambuger';
import { useIsMobileDevice } from '@/app/hooks/useIseMobileDevice';

export const PageLayout = ({ children }) => {
  const pathname = usePathname();
  const refinedPathname = pathname.slice(1).toUpperCase();
  const isMobileDevice = useIsMobileDevice();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <SideBar pathname={pathname} isOpen={isOpen} onClose={onClose} />
      <Box w={isMobileDevice ? 'full' : '80%'} height='100vh' bg='gray1' padding={5}>
        <Box bg='white' padding={5} border='1px solid #e2e8f0' borderRadius='10'>
          <Flex justify='space-between'>
            <Heading as='h1' size='md' alignSelf='center'>
              {!refinedPathname ? 'Dashboard' : refinedPathname}
            </Heading>
            <Box display={{ base: 'none', md: 'unset' }}>
              <Avatar name='Course Mgt' />
            </Box>
            <Button display={{ md: 'none' }} onClick={onOpen}>
              <Hamburger />
            </Button>
          </Flex>
        </Box>
        <Box
          bg='white'
          height='fit-content'
          padding={5}
          mt='5'
          border='1px solid #e2e8f0'
          borderRadius='10'>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
