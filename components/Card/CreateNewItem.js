import React from 'react';
import { StyledCard } from '.';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { NewCourseButton } from '../NewCourseButton';

export const CreateNewItem = ({ title, handleOnClick }) => {
  return (
    <StyledCard
      border='1px solid #e2e8f0'
      bg='white'
      size='lg'
      px={{ base: '4', md: '6' }}
      py={{ base: '4', md: '7' }}
      width={{ base: 'full', md: 'calc((100% /2) - 16px)' }}
      mr={{ base: 'unset', md: '4' }}
      mb={{ base: '4', md: 'unset' }}>
      <Flex justify='space-between' mb='4'>
        <Box>
          <Heading mt='2' size='md' fontWeight='bold' fontSize={{ base: 'md', md: 'xl' }}>
            {title}
          </Heading>
        </Box>
        <Box>
          <NewCourseButton handleOnClick={handleOnClick} />
        </Box>
      </Flex>
    </StyledCard>
  );
};
