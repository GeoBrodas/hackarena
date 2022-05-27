import {
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatUpArrow,
} from '@chakra-ui/react';
import dayjs from 'dayjs';

function StatsComponent({ data }) {
  var relativeTime = require('dayjs/plugin/relativeTime');

  dayjs.extend(relativeTime);
  return (
    <Stat>
      <StatLabel>Starts</StatLabel>
      <StatNumber>{dayjs(data.startDate).to()}</StatNumber>
      <StatHelpText alignItems={'center'}>
        <StatUpArrow marginRight={'5px'} type="increase" />
        {data.intrestedPeople} people interested
      </StatHelpText>
    </Stat>
  );
}

export default StatsComponent;
