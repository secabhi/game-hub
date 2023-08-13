import React from "react";
import useData from "./useData";

interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

const UsePlatforms = () => useData<PlatForm>("/platforms/lists/parents");

export default UsePlatforms;
