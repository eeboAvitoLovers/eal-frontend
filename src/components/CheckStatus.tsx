import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";
import messageApi, { ComplianceInfo } from "../api/messages";
import { toast } from "../utils/toasts";

const CheckStatus: FC = () => {
  const [messageId, setMessageId] = useState("");
  const [info, setInfo] = useState<ComplianceInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setInfo(null);
    setLoading(true);
    messageApi
      .getInfo(messageId)
      .then((res) => setInfo(res.data))
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
      {info && (
        <Stack gap="0.5rem">
          <Text>Номер обращения: {info.id}</Text>
          <Text>Статус обращения: {info.solved ? "Решено" : "Не решено"}</Text>
          <Text>Сообщение: {info.message}</Text>
          <Text>
            Дата создания: {new Date(info.create_at).toLocaleString()}
          </Text>
          <Text>
            Дата обновления: {new Date(info.update_at).toLocaleString()}
          </Text>
        </Stack>
      )}
    </Box>
  );
};

export default CheckStatus;
