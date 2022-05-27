import { HStack, Stack } from '@chakra-ui/react';
import MenuDropdown from '../components/dashboard/MenuDropdown';

function DashboardLayout({ children }) {
  return (
    <Stack
      width={{ base: '90%', md: '90%', lg: '70%' }}
      paddingX="20px"
      marginY={'30px'}
    >
      {/* Signout,etc, dropdown */}
      <HStack justify={'flex-end'}>
        {/* Dropdown */}
        <MenuDropdown />
      </HStack>

      {children}
    </Stack>
  );
}

export default DashboardLayout;
