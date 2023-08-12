import useData from "./useData";

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

const useGames = () => useData<Games>("/games");

export default useGames;
