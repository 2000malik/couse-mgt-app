import { Button } from '@chakra-ui/react';
import React from 'react';

export const StyledButton = ({ isLoading, handleOnClick, bg, children, disabled,...props }) => {
  return (
    <Button
      isLoading={isLoading}
      loadingText={props.loadingText || 'Processing'}
      onClick={handleOnClick}
      bg={bg}
      textAlign='center'
      fontWeight='600'
      borderRadius='10'
      width='100%'
      fontSize='sm'
      size='lg'
      _hover={{
        background: bg,
      }}
      isDisabled={disabled}
      {...props}>
      {children}
    </Button>
  );
};
