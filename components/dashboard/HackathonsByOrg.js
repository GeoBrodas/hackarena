import { Stack } from '@chakra-ui/react';
import Hackathon from '../ui/Hackathon';

function HackathonsByOrg() {
  const hackathonData = {
    title: "Technothon '22",
    startDate: '2022-05-25',
    endDate: '2022-05-27',
    intrestedPeople: 233,
  };

  return (
    <Stack
      style={{
        marginTop: '30px',
      }}
    >
      <Hackathon hackathonData={hackathonData} />
    </Stack>
  );
}

export default HackathonsByOrg;
