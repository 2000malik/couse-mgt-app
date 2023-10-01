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
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import styles from '../../styles/theme/linkStyle.module.css';
import { useIsMobileDevice } from '@/app/hooks/useIseMobileDevice';
import { navItems } from '@/Helpers/constant';
import { ArrowDown, ArrowUp } from '../Icons';

export const SideBar = ({ pathname, isOpen, onClose }) => {
  const isMobileDevice = useIsMobileDevice();
  const [showSubMenu, setShowSubMenu] = useState(false);
  // useEffect(() => {
  //   onClose();
  // }, [onClose, pathname]);
  return (
    <SidebarWrapper onClose={onClose} isOpen={isOpen}>
      <Box
        w={isMobileDevice ? 'full' : '20%'}
        minW='48'
        height='100vh'
        bg='background'
        padding={{ md: 'unset', lg: 5 }}>
        <aside>
          <Heading mt='5' as='h1' size='md' textAlign='center' color='white'>
            COURSE MGT APP
          </Heading>
          <Flex dir='column'>
            <Box mt='5' p='5'>
              {navItems.map(({ label, path, hasSubMenu, subMenu, icon }) => {
                return (
                  <List
                    key={label}
                    _hover={{
                      cursor: 'pointer',
                    }}
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
                            <Box
                              variant='unstyled'
                              pl='2'
                              m='0'
                              transform={
                                pathname === path?.toLowerCase() && showSubMenu
                                  ? 'rotate(360deg)'
                                  : 'unset'
                              }
                              transition='width 1s, height 1s, transform 1s'
                              onClick={() => setShowSubMenu(!showSubMenu)}>
                              {hasSubMenu && pathname === path?.toLowerCase() && showSubMenu ? (
                                <ArrowUp />
                              ) : (
                                <ArrowDown />
                              )}
                            </Box>
                          ) : null}
                        </Flex>
                      </Link>
                    </ListItem>
                    {pathname === path?.toLowerCase() && showSubMenu && (
                      <Fragment>
                        {subMenu?.map(({ label, path, icon }) => (
                          <Box key={label} my='3'>
                            <Link
                              shallow
                              className={pathname === path.toLowerCase() ? styles.Active : ''}
                              href={path}>
                              <Flex alignItems='center'>
                                <Text as='span' pr='2'>
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
        </aside>
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
