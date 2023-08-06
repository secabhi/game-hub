import React from "react";
import { Games } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticMetric from "./CriticMetric";

interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  const { background_image, name, parent_platforms, metacritic } = game;
  //   console.log(parent_platforms.map((e) => e.platform));
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={parent_platforms.map((t) => t.platform)}
          />
          <CriticMetric score={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
