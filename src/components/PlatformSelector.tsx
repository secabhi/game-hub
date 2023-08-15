import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import UsePlatforms from "../hooks/usePlatforms";
import { PlatForm } from "../hooks/useGames";

interface Props {
  setSelectedPlatform: (platform: PlatForm) => void;
  selectedPlatform: PlatForm | null;
}

function PlatformSelector({ setSelectedPlatform, selectedPlatform }: Props) {
  const { data, error } = UsePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((e) => (
          <MenuItem onClick={() => setSelectedPlatform(e)} key={e.id}>
            {e.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
