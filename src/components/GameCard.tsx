import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticsScore from './CriticsScore'
import getCroppedImageUrl from '../services/image-url'

interface Props {
    game: Game
}
const GameCard = ({game} : Props) => {
  return (
    <Card >
        <Image src={getCroppedImageUrl( game.background_image)} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
            <CriticsScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard