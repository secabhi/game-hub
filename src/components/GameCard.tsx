import React from "react";
import { Games } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticMetric from "./CriticMetric";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  const { background_image, name, parent_platforms, metacritic } = game;
  //   console.log(parent_platforms.map((e) => e.platform));
  return (
    <Card>
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={parent_platforms.map((t) => t.platform)}
          />
          <CriticMetric score={metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
