import {
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatUpArrow,
} from '@chakra-ui/react';
import dayjs from 'dayjs';

function StatsComponent({ data, ic }) {
  var relativeTime = require('dayjs/plugin/relativeTime');

  const filteredIc = ic.data.filter((ic) => {
    return ic.eventId === data._id;
  });

  // console.log(ic);

  dayjs.extend(relativeTime);
  return (
    <Stat
      style={{
        margin: '0 0 0 15px',
      }}
    >
      <StatLabel>Starts</StatLabel>
      <StatNumber>{dayjs(data.startDate).from()}</StatNumber>
      <StatHelpText alignItems={'center'}>
        <StatUpArrow marginRight={'5px'} type="increase" />
        {filteredIc.length} people interested
      </StatHelpText>
    </Stat>
  );
}

export default StatsComponent;
