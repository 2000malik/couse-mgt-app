import { StyledCard } from '@/components/Card';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const InstructorProfileCard = ({}) => {
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
      <Flex align='center'>
        <Avatar name='I N' />
        <Box>
          <Link href='https://2000malik.github.io/couse-mgt-app/' target='_blank'>
            <Text
              fontSize='sm'
              fontWeight='bold'
              ml='3'
              color='background'
              textTransform='capitalize'>
              name :
            </Text>
          </Link>
          <Text
            fontSize='sm'
            fontWeight='bold'
            ml='3'
            color='background'
            textTransform='capitalize'>
            dept
          </Text>
        </Box>
      </Flex>
    </StyledCard>
  );
};
