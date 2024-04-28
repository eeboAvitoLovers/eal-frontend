import { FC } from "react";
import { Ticket } from "../api/tickets";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { GridItem, Progress, SimpleGrid, Text } from "@chakra-ui/react";
import TicketCard from "./TicketCard";

type TicketListInternalProps = {
  tickets: Ticket[];
  onLoadMore: () => void;
  loading: boolean;
  onResolve?: (id: number) => void;
  onTakeInWork?: (id: number) => void;
};

const TicketListInternal: FC<TicketListInternalProps> = ({
  tickets,
  loading,
  onLoadMore,
  onResolve,
  onTakeInWork,
}) => {
  const elementRef = useInfiniteScroll(onLoadMore);

  return (
    <>
      {tickets.length === 0 ? (
        <Text>Нет обращений</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          {tickets.map((ticket) => (
            <GridItem key={ticket.id}>
              <TicketCard
                ticket={ticket}
                onTakeInWork={onTakeInWork}
                onResolve={onResolve}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      )}
      {loading && <Progress isIndeterminate colorScheme="green" />}
      <div ref={elementRef}></div>
    </>
  );
};

export default TicketListInternal;
