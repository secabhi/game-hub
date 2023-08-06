import React from "react";
import { Games } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  const { background_image, name, parent_platforms } = game;
  //   console.log(parent_platforms.map((e) => e.platform));
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{name}</Heading>
        <PlatformIconList platforms={parent_platforms.map((t) => t.platform)} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
