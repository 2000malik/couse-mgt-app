import { Card } from '@chakra-ui/react';

export const StyledCard = ({ bg, size, maxW, children,variant, ...props }) => {
  return (
    <Card
      borderRadius='20'
      borderColor='transparent'
      py='1'
      px='1'
      bg={bg || props.bgColor || 'white'}
      size={size}
      variant={variant||'outline'}
      maxW={maxW}
      
      {...props}>
      {children}
    </Card>
  );
};
