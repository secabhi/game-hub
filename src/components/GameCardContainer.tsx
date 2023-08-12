import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box width="100%" borderRadius={10} overflow="hidden" spac>
      {children}
    </Box>
  );
}

export default GameCardContainer;
