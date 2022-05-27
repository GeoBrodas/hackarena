import { Center, Heading, Kbd, Stack, Text } from '@chakra-ui/react';
import Announcements from './Announcements';
import DetailedDescription from './DetailedDescription';
import FAQS from './FAQS';
import OrganizerDetails from './OrganizerDetails';
import VenueDetails from './VenueDetails';

function HackathonDetailsComponent() {
  return (
    <Center marginY={'60px'}>
      <Stack direction={'column'} textAlign={'left'} width={'70%'}>
        {/* Title of the hackathon */}
        <Heading textAlign={'left'}>Technothon 2022 🎉</Heading>

        {/* Organiser details */}
        <OrganizerDetails />

        {/* Venue details, etc */}
        <VenueDetails />

        {/* Detailed Description */}
        <DetailedDescription />

        {/* FAQs */}
        <FAQS />

        {/* Announcements */}
        <Announcements />
      </Stack>
    </Center>
  );
}

export default HackathonDetailsComponent;
