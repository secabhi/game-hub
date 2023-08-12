import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <List>
      {data.map((e) => (
        <ListItem key={e.id} paddingY={"6px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(e.image_background)}
            />
            <Button variant={"link"} onClick={() => onSelectGenre(e)}>
              {e.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
