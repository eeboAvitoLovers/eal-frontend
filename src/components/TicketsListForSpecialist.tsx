import { FC, useCallback, useEffect, useState } from "react";
import ticketApi, { Ticket } from "../api/tickets";
import { Text } from "@chakra-ui/react";
import { toast } from "../utils/toasts";
import { useAuth } from "../context/authContext";
import TicketListInternal from "./TicketsListInternal";

const PAGE_SIZE = 10;

const TicketsListForSpecialist: FC = () => {
  const [offset, setOffset] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(() => {
    if (hasNextPage) setOffset(offset + PAGE_SIZE);
  }, []);

  const [auth] = useAuth();

  useEffect(() => {
    if (!auth || !auth.is_engineer) return;

    setLoading(true);
    ticketApi
      .getTicketsBySpecialistId(auth.ID, offset, PAGE_SIZE)
      .then((res) => {
        setTickets([...tickets, ...(res.data.messages ?? [])]);
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
  }, [offset]);

  const onResolve = useCallback((id: number) => {
    ticketApi
      .solveTicket(id)
      .then(() => {
        toast({ title: "Обращение отмечено как решенное", status: "success" });
        setTickets(
          tickets.map((ticket) =>
            ticket.id === id ? { ...ticket, solved: "solved" } : ticket
          )
        );
      })
      .catch(() =>
        toast({
          title: "Не удалось отметить обращение как решенное",
          status: "error",
        })
      );
  }, []);

  if (!auth || !auth.is_engineer) return <Text>Страница недосупна</Text>;

  return (
    <TicketListInternal
      tickets={tickets}
      loading={loading}
      onLoadMore={loadMore}
      onResolve={onResolve}
    />
  );
};

export default TicketsListForSpecialist;
