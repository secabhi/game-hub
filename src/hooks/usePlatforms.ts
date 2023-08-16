import PlatformList from "../data/platforms";

interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

const UsePlatforms = () => ({
  data: PlatformList,
  isLoading: false,
  error: null,
});

export default UsePlatforms;
