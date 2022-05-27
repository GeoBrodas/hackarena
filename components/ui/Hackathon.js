import { Button, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import StatsComponent from '../dashboard/StatsComponent';

import { RiDeleteBin6Line } from 'react-icons/ri';
import AlertBox from './AlertBox';

function Hackathon({ hackathonData }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Stack
      justify={'space-between'}
      paddingY="10px"
      paddingX="20px"
      rounded={'lg'}
      alignItems={'center'}
      borderWidth={'1px'}
      borderColor={'gray.400'}
      direction="row"
    >
      <VStack>
        <Text fontWeight={'semibold'} fontSize={'2xl'}>
          {hackathonData.title}
        </Text>

        {/* Stats */}
        <StatsComponent data={hackathonData} />
      </VStack>

      <Stack>
        <Button onClick={onOpen} leftIcon={<RiDeleteBin6Line />}>
          Cancel Event
        </Button>
        <AlertBox isOpen={isOpen} onClose={onClose} />
      </Stack>
    </Stack>
  );
}

export default Hackathon;
