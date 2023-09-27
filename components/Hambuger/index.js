import { Divider } from '@chakra-ui/react';
import { VerticalStack } from '../VerticalStack';

export const Hamburger = () => {
  return (
    <VerticalStack w='full'>
      <HorizontalRule {...hamburgerStyles} mb='1' />
      <HorizontalRule {...hamburgerStyles} mb='1' />
      <HorizontalRule {...hamburgerStyles} />
    </VerticalStack>
  );
};

const hamburgerStyles = {
  w: 'full',
  borderBottomWidth: '2px',
  borderColor: '#374B58',
};
export const HorizontalRule = ({ borderBottomWidth, ...props }) => {
  return <Divider orientation='horizontal' borderBottomWidth={borderBottomWidth} {...props} />;
};
