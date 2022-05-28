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

import { useRef, useState } from 'react';

function Interested({ eventId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // console.log(eventId);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [data, setData] = useState({
    gitHubUsername: '',
    email: '',
  });

  const initialRef = useRef();
  const finalRef = useRef();

  async function sendData() {
    // form validation
    if (data.gitHubUsername === '' || data.email === '') {
      alert('Please fill all the fields');
      return;
    }

    setLoading(true);
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
      console.log(responseData);
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
      <Button onClick={onOpen}>Show Your Interest</Button>
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
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                value={data.gitHubUsername}
                onChange={(e) =>
                  setData({ ...data, gitHubUsername: e.target.value })
                }
                placeholder="GitHub UserName"
              />
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
