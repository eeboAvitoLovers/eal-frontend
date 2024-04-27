import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import ticketApi, {
  Ticket,
  TicketStatus,
  ticketStatuses,
} from "../api/tickets";
import {
  GridItem,
  Progress,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { toast } from "../utils/toasts";
import { useAuth } from "../context/authContext";
import TicketCard from "./TicketCard";
import { useNavigate } from "react-router-dom";

const PAGE_SIZE = 10;

const TicketsList: FC = () => {
  const [offset, setOffset] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [status, setStatus] = useState<TicketStatus>(ticketStatuses[0]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);

  const onStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTickets([]);
    setStatus(e.target.value as TicketStatus);
  };

  const loadMore = useCallback(() => {
    if (hasNextPage) setOffset(offset + PAGE_SIZE);
  }, []);

  const elementRef = useInfiniteScroll(loadMore);

  useEffect(() => {
    setLoading(true);
    ticketApi
      .getTicketsByStatus(status, offset, PAGE_SIZE)
      .then((res) => {
        setTickets([...tickets, ...res.data.messages]);
        setHasNextPage(res.data.total > offset);
      })
      .catch(() => {
        setHasNextPage(false);
        toast({
          title: "Ошибка!",
          description: "Не удалось загрузить обращения",
          status: "error",
        });
      })
      .finally(() => setLoading(false));
  }, [status, offset]);

  const [auth] = useAuth();
  const navigate = useNavigate();
  const onTakeInWork = useCallback(
    (id: number) => {
      ticketApi
        .takeInWork(id, auth!.ID)
        .then(() => {
          toast({ title: "Обращение взято в работу" });
          navigate("/my-tickets");
        })
        .catch(() => toast({ title: "Не удалось взять обращение в работу" }));
    },
    [auth?.ID]
  );

  if (!auth || !auth.is_engineer) return <Text>Страница недосупна</Text>;

  return (
    <Stack gap="1rem">
      <Select
        maxW="sm"
        placeholder="Выберите статус"
        onChange={onStatusChange}
        value={status}
      >
        {ticketStatuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </Select>
      {tickets.length === 0 ? (
        <Text>Нет обращений</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          {tickets.map((ticket) => (
            <GridItem key={ticket.id}>
              <TicketCard ticket={ticket} onTakeInWork={onTakeInWork} />
            </GridItem>
          ))}
        </SimpleGrid>
      )}
      {loading && <Progress isIndeterminate colorScheme="green" />}
      <div ref={elementRef}></div>
    </Stack>
  );
};

export default TicketsList;
