import { Box } from "@chakra-ui/react";

export const VerticalStack = ({ children, ...props }) => {
    return (
      <Box display='flex' flexDir='column' {...props}>
        {children}
      </Box>
    );
  };