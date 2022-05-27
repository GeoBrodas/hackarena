import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

function OrganizerDetails() {
  return (
    <HStack
      bg="red.50"
      alignItems={'center'}
      rounded={'lg'}
      padding="10px"
      justify={'space-between'}
    >
      {/* Avatar */}
      <Stack direction={'row'} alignItems={'center'}>
        <Box rounded="full" border={'5px'} borderColor="red">
          <Image
            style={{
              borderRadius: '100%',
            }}
            alt="badge"
            src="https://bit.ly/ryan-florence"
            width="60px"
            height="60px"
          />
        </Box>

        {/* Details */}
        <Stack direction={'column'} spacing="0">
          <Text fontSize="lg">Organised by Team Cursor</Text>
          <Text fontWeight="light">Posted on 23-10-2001</Text>
        </Stack>
      </Stack>

      {/* Socials */}
      <Stack direction={'row'} alignItems={'center'}>
        <Text fontSize="lg">Twitter</Text>
        <Text fontSize="lg">LinkedIn</Text>
        <Text fontSize="lg">Discord</Text>
      </Stack>
    </HStack>
  );
}

export default OrganizerDetails;
