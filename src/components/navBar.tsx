import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./colorModeSwitch";

interface Props {}

function NavBar(props: Props) {
  const {} = props;

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
