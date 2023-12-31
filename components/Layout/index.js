'use client';
import { Avatar, Box, Button, Flex, Heading, Spacer, useDisclosure } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { SideBar } from './SideBar';
import { Hamburger } from '../Hambuger';
import { useIsMobileDevice } from '@/app/hooks/useIseMobileDevice';
import { useContext } from 'react';
import { AppContext } from '@/app/context';

export const PageLayout = ({ children }) => {
  const pathname = usePathname();
  const refinedPathname = pathname.slice(1).toUpperCase();
  const isMobileDevice = useIsMobileDevice();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userProfile } = useContext(AppContext);
  return (
    <Flex>
      <SideBar pathname={pathname} isOpen={isOpen} onClose={onClose} />
      <Box
        w={isMobileDevice ? 'full' : '80%'}
        h='100vh'
        minH='100'
        overflow='auto'
        bg='gray1'
        padding={5}>
        <main>
          <Box bg='white' padding={5} border='1px solid #e2e8f0' borderRadius='10'>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
              <Box p='2'>
                <Heading as='h1' size='md' alignSelf='center'>
                  {!refinedPathname ? 'Dashboard' : refinedPathname}
                </Heading>
              </Box>
              <Spacer />
              <Box gap='2'>
                <Box display={{ base: 'none', md: 'unset' }}>
                  <Avatar name={userProfile.name} src='/assests/images/malik2.jpeg' color='white' />
                </Box>
                <Button display={{ md: 'none' }} onClick={onOpen}>
                  <Hamburger />
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box bg='white' padding={5} mt='5' border='1px solid #e2e8f0' borderRadius='10'>
            {children}
          </Box>
        </main>
      </Box>
    </Flex>
  );
};
