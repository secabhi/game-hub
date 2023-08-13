import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import UsePlatforms from "../hooks/usePlatforms";

interface Props {}

function PlatformSelector(props: Props) {
  const { data, error } = UsePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        {data.map((e) => (
          <MenuItem key={e.id}>{e.name}</MenuItem>
        ))}
        <MenuItem>Item 2</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
