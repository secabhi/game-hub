import React from "react";
import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

interface Props {}

function GenreList(props: Props) {
  const { genres, error, isLoading } = useGenres();

  return (
    <ul>
      {genres.map((e) => (
        <Text>{e.name}</Text>
      ))}
    </ul>
  );
}

export default GenreList;
