import { StyledCard } from '@/components/Card';
import { PageLayout } from '@/components/Layout';
import { Heading, Table, TableContainer, Tbody, Td,  Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

async function getData() {
  const path = 'https://jsonplaceholder.typicode.com/users';
  const res = await fetch(path, { cache: 'force-cache' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function Home() {
  const data = await getData();

  return (
    <PageLayout>
      <Heading mb='5' as='h4' size='lg' textAlign='center'>
        API CALL EXAMPLE
      </Heading>

      <UserTable usersList={data} />
    </PageLayout>
  );
}

export const UserTable = ({ usersList = [] }) => {
  const usersTableHead = ['id', 'name', 'username', 'email', 'phone'];

  return (
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
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </StyledCard>
  );
};
