import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import styles from '../../styles/theme/linkStyle.module.css';
import { useIsMobileDevice } from '@/app/hooks/useIseMobileDevice';
import { navItems } from '@/Helpers/constant';

export const SideBar = ({ pathname, isOpen, onClose }) => {
  const isMobileDevice = useIsMobileDevice();
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <SidebarWrapper onClose={onClose} isOpen={isOpen}>
      <Box w={isMobileDevice ? 'full' : '20%'} height='100vh' bg='background' padding={5}>
        <Heading mt='5' as='h1' size='md' textAlign='center' color='white'>
          COURSE MGT APP
        </Heading>
        <Flex dir='column'>
          <Box mt='5' p='5'>
            {navItems.map(({ label, path, hasSubMenu, subMenu, icon }) => {
          
              return (
                <List
                  key={label}
                  _hover={{ cursor: 'pointer' }}
                  bg='white'
                  p='3'
                  w='full'
                  textAlign='center'
                  border='1px solid #e2e8f0'
                  borderRadius='10'
                  fontSize='sm'
                  fontWeight='medium'
                  mb='3'>
                  <ListItem>
                    <Link
                      shallow
                      className={pathname === path?.toLowerCase() ? styles.Active : ''}
                      href={path}>
                      <Flex alignItems='center'>
                        <Text
                          as='span'
                          pr='2'
                          // className={pathname === path.toLowerCase() ? styles.Active : ''}
                        >
                          {icon}
                        </Text>
                        <Text as='span'>{label}</Text>
                        {hasSubMenu ? (
                          <Button
                            variant='unstyled'
                            p='0'
                            m='0'
                            onClick={() => setShowSubMenu(!showSubMenu)}>
                            <Text as='span' pl='2' transition='width 1s, height 1s, transform 1s'>
                              &gt;
                            </Text>
                          </Button>
                        ) : null}
                      </Flex>
                    </Link>
                  </ListItem>
                  {showSubMenu && (
                    <Fragment>
                      {subMenu?.map(({ label, path, icon }) => (
                        <Box key={label + 'yugyuu'} mb='3'>
                          <Link
                            shallow
                            className={pathname === path.toLowerCase() ? styles.Active : ''}
                            href={path}>
                            <Flex alignItems='center'>
                              <Text
                                as='span'
                                pr='2'
                                // className={pathname === path.toLowerCase() ? styles.Active : ''}
                              >
                                {icon}
                              </Text>
                              <Text as='span'>{label}</Text>
                            </Flex>
                          </Link>
                        </Box>
                      ))}
                    </Fragment>
                  )}
                </List>
              );
            })}
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
