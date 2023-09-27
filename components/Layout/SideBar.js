import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  List,
  ListItem,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { Fragment } from 'react';
import styles from '../../styles/theme/linkStyle.module.css';
import { useIsMobileDevice } from '@/app/hooks/useIseMobileDevice';
export const SideBar = ({ pathname, isOpen, onClose }) => {
  const isMobileDevice = useIsMobileDevice();
  const navItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Student List ', path: '/student' },
  ];

  return (
    <SidebarWrapper onClose={onClose} isOpen={isOpen}>
      <Box w={isMobileDevice ? 'full' : '20%'} height='100vh' bg='background' padding={5}>
        <Heading mt='5' as='h1' size='md' textAlign='center' color='white'>
          COURSE MGT APP
        </Heading>
        <Flex dir='column'>
          <Box mt='5' p='5'>
            {navItems.map(({ label, path }) => (
              <List
                key={label}
                _hover={{ cursor: 'pointer' }}
                bg='white'
                p='3'
                w='full'
                textAlign='center'
                border='1px solid #e2e8f0'
                borderRadius='10'
                mb='3'>
                <ListItem>
                  <Link
                    shallow
                    className={pathname === path.toLowerCase() ? styles.Active : ''}
                    href={path}>
                    {label}
                  </Link>
                </ListItem>
              </List>
            ))}
          </Box>
        </Flex>
      </Box>
    </SidebarWrapper>
  );
};
const SidebarWrapper = ({ children, isOpen, onClose, ...props }) => {
  const isMobileDevice = useIsMobileDevice();
  if (isMobileDevice) {
    return (
      <Drawer placement='left' isOpen={isOpen} onClose={onClose} {...props} isFullHeight>
        <DrawerOverlay />
        <DrawerContent maxW='260px'>
          <DrawerCloseButton zIndex='1000' top='5px' right='10px' />
          {children}
        </DrawerContent>
      </Drawer>
    );
  }

  return <Fragment>{children}</Fragment>;
};
