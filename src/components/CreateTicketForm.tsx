import { Textarea, Button, Box, Text } from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";
import ticketApi from "../api/tickets";
import { toast } from "../utils/toasts";

const CreateTicketForm: FC = () => {
  const [message, setMessage] = useState("");
  const [createdMessageId, setCreatedMessageId] = useState<number>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCreatedMessageId(undefined);

    ticketApi
      .createTicket(message)
      .then((response) => {
        setMessage("");
        setCreatedMessageId(response.data.id);
        toast({
          title: "Обращение отправленно!",
          description: `Номер вашего обращения: ${response.data.id}`,
          status: "success",
        });
      })
      .catch((e) => {
        console.error(e);
        toast({
          title: "Ошибка!",
          description: e.message,
          status: "error",
        });
      });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      as="form"
      onSubmit={handleSubmit}
    >
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Отправьте ваше обращение"
        minLength={10}
        required
      />
      <Button colorScheme="blue" type="submit">
        Отправить
      </Button>
      {createdMessageId && <Text>ID вашего обращения: {createdMessageId}</Text>}
    </Box>
  );
};

export default CreateTicketForm;
