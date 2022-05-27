import { Kbd, Stack, Text } from '@chakra-ui/react';

function VenueDetails() {
  return (
    <Stack padding={'30px'}>
      <Text fontSize={'xl'}>
        <Kbd>Venue:</Kbd>
        <Kbd>24-10-2001</Kbd> till <Kbd>26-10-2001</Kbd>
      </Text>
      <Text fontSize={'xl'}>
        <Kbd>Location:</Kbd>
        Panjim{' '}
      </Text>
      <Text fontSize={'xl'}>
        <Kbd>Official Page:</Kbd>
        Team Cursor
      </Text>
      <Text fontSize={'xl'}>
        <Kbd>Entry fee:</Kbd>
        Free!
      </Text>
    </Stack>
  );
}

export default VenueDetails;
