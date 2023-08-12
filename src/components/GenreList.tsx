import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";

interface Props {}

function GenreList(props: Props) {
  const { data } = useGenres();

  return (
    <List>
      {data.map((e) => (
        <ListItem key={e.id} paddingY={"6px"}>
          <HStack>
            <Image boxSize={"32px"} borderRadius={8} src={e.image_background} />
            <Text>{e.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
