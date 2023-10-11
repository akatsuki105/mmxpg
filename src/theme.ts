import { ThemeConfig, extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark', // Force dark mode
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Noto Sans JP', 'Inter', sans-serif`,
    body: `'Noto Sans JP', 'Inter', sans-serif`,
  },
});

export default theme;
