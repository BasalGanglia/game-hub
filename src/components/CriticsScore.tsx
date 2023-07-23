import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}
const CriticsScore = ({score} : Props) => {
  return (
    <Badge fontSize='14px' paddingX={2} borderRadius='4px' colorScheme={score > 75 ? 'green' : score > 50 ? 'yellow' : 'red'}>{score}</Badge>
  )
}

export default CriticsScore