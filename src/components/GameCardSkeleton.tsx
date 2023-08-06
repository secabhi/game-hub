import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

interface Props {}

function GameCardSkeleton(props: Props) {
  const {} = props;

  return (
    <GameCardContainer>
      <Card>
        <Skeleton height={"200px"} />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
}

export default GameCardSkeleton;
