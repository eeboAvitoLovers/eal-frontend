import { FC, useEffect, useState } from "react";
import { Progress, Stack } from "@chakra-ui/react";
import MessageInfo from "./MessageInfo";
import messageApi, { ComplianceInfo } from "../api/messages";
import { AxiosResponse } from "axios";
import { toast } from "../utils/toasts";

const UnsolvedMessages: FC = () => {
  const [unsolvedMessages, setUnsolvedMessages] = useState<ComplianceInfo[]>();

  useEffect(() => {
    setUnsolvedMessages(undefined);

    messageApi
      .getUnsolved()
      .then((res: AxiosResponse<ComplianceInfo[]>) =>
        setUnsolvedMessages(res.data)
      )
      .catch((e) => {
        console.error(e);
        toast({
          title: "Ошибка!",
          description: e.message,
          status: "error",
        });
      });
  }, []);

  if (unsolvedMessages === undefined)
    return <Progress isIndeterminate size="xs" />;

  return (
    <Stack gap="2rem">
      {unsolvedMessages.map((message) => (
        <MessageInfo key={message.id} messageInfo={message} />
      ))}
    </Stack>
  );
};

export default UnsolvedMessages;
