import {
  Stack,
  Text,
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import AlertInput from '../ui/AlertInput';

import { useRef, useState } from 'react';

function Interested({ eventId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // console.log(eventId);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const [data, setData] = useState({
    gitHubUsername: '',
    email: '',
  });

  const initialRef = useRef();
  const finalRef = useRef();

  console.log(data);

  async function sendData() {
    // form validation
    if (data.gitHubUsername === '' || data.email === '') {
      alert('Please fill all the fields');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/users/${data.gitHubUsername}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        }
      );

      const parse = await response.json();

      if (!parse.id) {
        setError('Invalid GitHub USername');
        setLoading(false);
        return;
      }

      // console.log(parse);
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert(
        'Something went wrong, if this persists, please context the developer'
      );
      return;
    }

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/api/send-interest?eventId={eventId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
          body: JSON.stringify({
            eventId: eventId,
            gitHubUsername: data.gitHubUsername,
            email: data.email,
          }),
        }
      );

      const responseData = await response.json();
      setLoading(false);
      router.replace(`/hackathons/${eventId}`);
      // console.log(responseData);
      onClose();
    } catch (error) {
      setLoading(false);

      alert(error.message);

      console.log(error);
    }

    // last
  }

  return (
    <>
      <Button onClick={onOpen}>
        Interested? Let the organiser know your arrival!
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Let Us Know You Better!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>GitHub username</FormLabel>
              <Input
                ref={initialRef}
                value={data.gitHubUsername}
                onChange={(e) =>
                  setData({ ...data, gitHubUsername: e.target.value })
                }
                placeholder="GeoBrodas"
              />

              {error === 'Invalid GitHub Username' && (
                <AlertInput title="Invalid GitHub Username" />
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email ID</FormLabel>
              <Input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="Email ID"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={loading}
              colorScheme="blue"
              mr={3}
              onClick={sendData}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Interested;
