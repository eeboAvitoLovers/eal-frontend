import { FC } from "react";
import { Ticket } from "../api/tickets";
import { Stack, Text } from "@chakra-ui/react";

type TicketDetailsProps = {
  ticket: Ticket;
};

const TicketDetails: FC<TicketDetailsProps> = ({ ticket }) => {
  return (
    <Stack gap="0.5rem" maxW="100%">
      <Text size="sm">ID {ticket.id}</Text>
      <Text>Статус обращения: {ticket.solved}</Text>
      <Text textOverflow="ellipsis" overflow="hidden" isTruncated>
        Сообщение: {ticket.message}
      </Text>
      <Text>Дата создания: {new Date(ticket.create_at).toLocaleString()}</Text>
      <Text>
        Дата обновления: {new Date(ticket.update_at).toLocaleString()}
      </Text>
    </Stack>
  );
};

export default TicketDetails;
