import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { StyledCard } from '../Card';

export const StyledTable = ({ tableData = [] }) => {
 
  return (
    <StyledCard bg='unset' variant='filled' border='1px solid #e2e8f0'>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>S/N</Th>
              <Th>Course Name</Th>
              <Th>Course Id</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((data, index) => {
              const { course_name, course_id } = data;
              return (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{course_name}</Td>
                  <Td>{course_id}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </StyledCard>
  );
};
