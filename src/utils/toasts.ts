import { createStandaloneToast } from "@chakra-ui/react";

export const { ToastContainer, toast } = createStandaloneToast({
  defaultOptions: {
    duration: 9000,
    isClosable: true,
  },
});
