import { Button, Card, CardBody, CardFooter } from "@chakra-ui/react";
import { memo } from "react";
import TicketDetails from "./TicketDetails";
import { Ticket } from "../api/tickets";

interface TicketCardProps {
  ticket: Ticket;
  onTakeInWork?: (id: number) => void;
  onResolve?: (id: number) => void;
}

const TicketCard = memo(
  ({ ticket, onTakeInWork, onResolve }: TicketCardProps) => {
    const canTakeInWork = ticket.solved === "in_queue" && onTakeInWork;
    const canResolve = ticket.solved !== "solved" && onResolve;

    return (
      <Card>
        <CardBody>
          <TicketDetails ticket={ticket} />
        </CardBody>
        <CardFooter>
          {canTakeInWork && (
            <Button size="sm" onClick={() => onTakeInWork(ticket.id)}>
              Взять в работу
            </Button>
          )}
          {canResolve && (
            <Button size="sm" onClick={() => onResolve(ticket.id)}>
              Решить
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  }
);

export default TicketCard;
