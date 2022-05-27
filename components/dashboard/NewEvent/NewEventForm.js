import {
  Input,
  Container,
  Text,
  VStack,
  Stack,
  Heading,
  Textarea,
  HStack,
  Button,
  FormLabel,
} from '@chakra-ui/react';

import { useState } from 'react';
import AlertBox from '../../ui/AlertBox';
import AlertInput from '../../ui/AlertInput';

function NewEventForm() {
  const [data, setData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    twitter: '',
    linkedin: '',
    discord: '',
    city: '',
    state: '',
  });

  const [error, setError] = useState('');

  async function sendData() {
    // form validation
    if (data.title === '') {
      setError('title');
      return;
    }

    if (data.description === '' || data.description.length < 500) {
      setError('description');
      return;
    }
  }

  return (
    <VStack>
      <Stack
        width="57%"
        style={{
          margin: '70px auto',
        }}
      >
        <Heading fontSize="2xl" marginY={'40px'} fontWeight={'bold'}>
          Someones going to be busy?
        </Heading>

        {/* eslint-disable-next-line react/no-unescaped-entities */}

        {/* Title of the event */}
        <Text fontWeight="semibold">Let's start with the name, shall we?</Text>
        {error === 'title' && data.title.length === 0 && (
          <AlertInput title="You missed the most important part!" />
        )}
        <Input
          placeholder="Technothon '22"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />

        <Text fontWeight="semibold">Write something about the hackathon?</Text>
        {error === 'description' && data.description.length === 0 && (
          <AlertInput title="You missed the most important part!" />
        )}
        <Textarea
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          placeholder="This can include details like history about the hackathon, rules and regulations, etc"
        />
        <HStack justify="flex-end">
          <Text>{500 - data.description.length} characters left</Text>
        </HStack>

        {/* Hackathon details - venue, dates, entry-fee?, organizer site */}
        <Text
          fontWeight="semibold"
          textAlign={'center'}
          style={{
            marginTop: '40px',
          }}
        >
          Now let's get some more details about the hackathon?
        </Text>

        <Stack
          style={{
            margin: '20px auto',
          }}
        >
          <HStack>
            <Text>State</Text>
            <Input
              value={data.state}
              onChange={(e) => setData({ ...data, state: e.target.value })}
              placeholder="Goa"
            />
            <Text>City</Text>
            <Input
              placeholder="Ponda"
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
            />
          </HStack>
        </Stack>

        <Button
          onClick={sendData}
          width="20%"
          style={{
            margin: '0 auto',
          }}
        >
          Post Event 🎉
        </Button>
      </Stack>
    </VStack>
  );
}

export default NewEventForm;
