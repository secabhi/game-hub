import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";
import useData from "../hooks/useData";

interface Props {}

function GenreList(props: Props) {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((e) => (
        <Text>{e.name}</Text>
      ))}
    </ul>
  );
}

export default GenreList;
