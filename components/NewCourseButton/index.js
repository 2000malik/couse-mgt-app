// 'use client';
import { Button } from '@chakra-ui/react';

export const NewCourseButton = ({ handleOnClick }) => {
  return (
    <Button
      type='submit'
      variant='unstyled'
      color='background'
      fontSize='xl'
      border='1px solid #0077FF'
      borderRadius='50%'
      p='2'
      display='flex'
      alignItems='center'
      justifyContent='center'
      onClick={handleOnClick}>
      +
    </Button>
  );
};
