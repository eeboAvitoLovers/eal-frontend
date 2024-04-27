import { Button, Card, CardBody, CardFooter } from "@chakra-ui/react";
import { memo } from "react";
import TicketDetails from "./TicketDetails";
import { Ticket } from "../api/tickets";

interface TicketCardProps {
  ticket: Ticket;
  onTakeInWork: (id: number) => void;
}

const TicketCard = memo(({ ticket, onTakeInWork }: TicketCardProps) => {
  return (
    <Card>
      <CardBody>
        <TicketDetails ticket={ticket} />
      </CardBody>
      <CardFooter>
        {ticket.solved === "accepted" && (
          <Button size="sm" onClick={() => onTakeInWork(ticket.id)}>
            Взять в работу
          </Button>
        )}
      </CardFooter>
    </Card>
  );
});

export default TicketCard;
