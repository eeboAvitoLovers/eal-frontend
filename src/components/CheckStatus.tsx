import { Box, Button, Input } from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";
import messageApi from "../api/messages";
import { toast } from "../utils/toasts";

const CheckStatus: FC = () => {
  const [messageId, setMessageId] = useState("");
  const [status, setStatus] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setStatus(undefined);
    setLoading(true);
    messageApi
      .checkStatus(messageId)
      .then((res) => setStatus(res.data))
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
        value={messageId}
        onChange={(e) => setMessageId(e.target.value)}
        placeholder="Номер обращения"
        required
      />
      <Button isLoading={loading} colorScheme="blue" type="submit">
        Проверить
      </Button>
      {status && <Box mb={2}>Cтатус: {status}</Box>}
    </Box>
  );
};

export default CheckStatus;
