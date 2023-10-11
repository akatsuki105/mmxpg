import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { GitHubIcon, TwitterIcon } from './Icon';

export const Footer: React.FC = () => {
  return (
    <Box color="gray.500">
      <Flex columnGap={4}>
        <Spacer />
        <Box w="1.5rem" h="1.5rem">
          <GitHubIcon />
        </Box>
        <Box w="1.3rem" h="1.3rem" mt="0.1rem">
          <TwitterIcon />
        </Box>
        <Spacer />
      </Flex>
      <Spacer h={2} />
      <Box fontSize={{ base: 'xs', lg: 'sm' }} textAlign="center">
        <Text>The images are © CAPCOM CO., LTD.</Text>
        <Text>Everything else is © 2023 Akatsuki.</Text>
      </Box>
    </Box>
  );
};
