import { Textarea, Button, Box } from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";
import messageApi from "../api/messages";
import { toast } from "../utils/toasts";

const ComplianceForm: FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    messageApi
      .sendMessage(message)
      .then(() => {
        setMessage("");
        toast({
          title: "Обращение отправленно!",
          description: "Номер вашего обращения: XXX",
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
    </Box>
  );
};

export default ComplianceForm;
