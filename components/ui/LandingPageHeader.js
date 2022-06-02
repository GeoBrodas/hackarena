import { Center, Text } from '@chakra-ui/react';

function LandingPageHeader() {
  return (
    <Center color="white" bg="purple.400" padding="10px">
      <Text
        fontSize={{
          base: 'sm',
          md: 'md',
          lg: 'md',
        }}
        textAlign={'center'}
      >
        Weclome to the Public Beta release of HackArena 🎉
      </Text>
    </Center>
  );
}

export default LandingPageHeader;
