import { Box, Button, Input } from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";
import ticketApi, { Ticket } from "../api/tickets";
import { toast } from "../utils/toasts";
import TicketDetails from "./TicketDetails";

const CheckTicketStatusForm: FC = () => {
  const [ticketId, setTicketId] = useState<number>();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!ticketId) return;

    setTicket(null);
    setLoading(true);
    ticketApi
      .getTicketById(ticketId)
      .then((res) => setTicket(res.data))
      .catch((e) => {
        console.error(e);
        toast({
          title: "Ошибка!",
          description: e.message,
          status: "error",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      as="form"
      onSubmit={handleSubmit}
    >
      <Input
        value={ticketId}
        onChange={(e) => setTicketId(parseInt(e.target.value))}
        type="number"
        placeholder="Номер обращения"
        required
      />
      <Button isLoading={loading} colorScheme="blue" type="submit">
        Проверить
      </Button>
      {ticket && <TicketDetails ticket={ticket} />}
    </Box>
  );
};

export default CheckTicketStatusForm;
