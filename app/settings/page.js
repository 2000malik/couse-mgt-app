'use client';
import { CreateNewItem } from '@/components/Card/CreateNewItem';
import { Edit, ViewMore } from '@/components/Icons';
import { PageLayout } from '@/components/Layout';
import { Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { ChangePassword } from './Modals/ChangePassword';
import { UserInfo } from './Modals/UserInfo';

export default function Settings() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenUserInfo,
    onClose: onCloseUserInfo,
    onOpen: onOpenUserInfo,
  } = useDisclosure();
  const actionTabs = [
    {
      label: 'Change password',
      value: 'change password',
      cardIcon: <Edit />,
      handleOpenOrClose: () => onOpen(),
    },
    {
      label: 'User Info',
      value: 'User Info',
      cardIcon: <ViewMore />,
      handleOpenOrClose: () => onOpenUserInfo(),
    },
  ];
  return (
    <PageLayout>
      <Flex flexDir={{ base: 'column', md: 'initial' }}>
        {actionTabs.map(({ label, handleOpenOrClose, cardIcon }) => (
          <CreateNewItem
            key={label}
            title={label}
            cardIcon={cardIcon}
            handleOnClick={handleOpenOrClose}
          />
        ))}
      </Flex>
      {isOpen && <ChangePassword isOpen={isOpen} onClose={onClose} />}
      {isOpenUserInfo && <UserInfo isOpen={isOpenUserInfo} onClose={onCloseUserInfo} />}
    </PageLayout>
  );
}
