import { FormControl, Input, Text } from '@chakra-ui/react';
import React from 'react';

export const StyledInputBox = ({
  label,
  value,
  handleOnChange,
  type,
  isRequired,
  name,
  showValidWarning = true,
  disabled,
  ...props
}) => {
  return (
    <FormControl w={props.w} isRequired={isRequired}>
      {label && <Text mb='8px'>{label}</Text>}
      <Input
        value={value}
        onChange={handleOnChange}
        placeholder={props.placeholder}
        size={'lg' || props.size}
        type={type}
        name={name}
        borderRadius='10'
        fontWeight='400'
        fontSize='sm'
        bg='white'
        w='full'
        border='1px solid #e2e8f0'
        _placeholder={{ fontSize: 'sm', opacity: '0.5' }}
        errorBorderColor={showValidWarning ? 'red' : 'initial'}
        disabled={disabled}
      />
    </FormControl>
  );
};
