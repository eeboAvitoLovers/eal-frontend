import { FC, useEffect, useState } from "react";
import { Progress, Stack } from "@chakra-ui/react";
// import MessageInfo from "./TicketDetails";
import messageApi, { Ticket } from "../api/tickets";
// import { AxiosResponse } from "axios";
// import { toast } from "../utils/toasts";

const UnsolvedMessages: FC = () => {
  const [unsolvedMessages, setUnsolvedMessages] = useState<Ticket[]>();

  useEffect(() => {
    // setUnsolvedMessages(undefined);
    // messageApi
    //   .getUnsolved()
    //   .then((res: AxiosResponse<Ticket[]>) =>
    //     setUnsolvedMessages(res.data)
    //   )
    //   .catch((e) => {
    //     console.error(e);
    //     toast({
    //       title: "Ошибка!",
    //       description: e.message,
    //       status: "error",
    //     });
    //   });
  }, []);

  if (unsolvedMessages === undefined)
    return <Progress isIndeterminate size="xs" />;

  return (
    <Stack gap="2rem">
      {unsolvedMessages.map(
        (message) =>
          // <MessageInfo key={message.id} messageInfo={message} />
          null
      )}
    </Stack>
  );
};

export default UnsolvedMessages;
