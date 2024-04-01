import { extendTheme } from '@chakra-ui/react';
import { customBtn } from './components/customBtn';
export const theme = extendTheme({
  components: {
    Button: customBtn,
  },
});
