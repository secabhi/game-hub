import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

interface Props {}

function GameCardSkeleton(props: Props) {
  const {} = props;

  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
