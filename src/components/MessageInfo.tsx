import { FC } from "react";
import { ComplianceInfo } from "../api/messages";
import { Stack, Text } from "@chakra-ui/react";

type MessageInfoProps = {
  messageInfo: ComplianceInfo;
};

const MessageInfo: FC<MessageInfoProps> = ({ messageInfo }) => {
  return (
    <Stack gap="0.5rem">
      <Text>Номер обращения: {messageInfo.id}</Text>
      <Text>
        Статус обращения: {messageInfo.solved ? "Решено" : "Не решено"}
      </Text>
      <Text>Сообщение: {messageInfo.message}</Text>
      <Text>
        Дата создания: {new Date(messageInfo.create_at).toLocaleString()}
      </Text>
      <Text>
        Дата обновления: {new Date(messageInfo.update_at).toLocaleString()}
      </Text>
    </Stack>
  );
};

export default MessageInfo;
