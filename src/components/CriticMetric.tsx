import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

function CriticMetric({ score }: Props) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize={"14px"} paddingX={2} borderRadius={"4px"} color={color}>
      {score}
    </Badge>
  );
}

export default CriticMetric;
