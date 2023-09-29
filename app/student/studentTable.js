'use client';
import React, { Fragment, useState } from 'react';
import { StyledCard } from '@/components/Card';
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { ViewMore } from '@/components/Icons';
import { ViewMoreCard } from './viewmoreCard';
export const UserTable = ({ usersList = [] }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const usersTableHead = ['id', 'name', 'username', 'email', 'phone', 'view more'];
  const [, setUserInfo] = useState({});
  const handleStudentInfoUpdate = ({ ...args }) => {
    const { info } = args;
    setUserInfo(info);
    // console.log(info);
    onOpen();
  };
  return (
    <Fragment>
      <StyledCard variant='elevated'>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>{React.Children.toArray(usersTableHead.map((name) => <Th>{name}</Th>))}</Tr>
            </Thead>
            <Tbody>
              {React.Children.toArray(
                usersList?.map((info) => (
                  <Tr>
                    <Td>{info.id}</Td>
                    <Td> {info.name}</Td>
                    <Td>{info.username}</Td>
                    <Td> {info.email}</Td>
                    <Td>{info.phone}</Td>
                    <Td>
                      <Button variant='unstyled' onClick={() => handleStudentInfoUpdate({ info })}>
                        <ViewMore />
                      </Button>
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </StyledCard>
      {isOpen && <ViewMoreCard isOpen={isOpen} onClose={onClose} />}
    </Fragment>
  );
};
