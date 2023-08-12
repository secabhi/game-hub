import useData from "./useData";
import { Genre } from "./useGenres";

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
}

export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

const useGames = (selectedGenre: Genre | null) =>
  useData<Games>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
