import { Box, Container, Heading } from "@chakra-ui/react";
import { FC } from "react";
import Navigation from "./Navigation";

type FullPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const FullPageLayout: FC<FullPageLayoutProps> = ({ title, children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navigation />
      <Container py={4}>
        <Heading size="lg" pb="1.5rem">
          {title}
        </Heading>
        {children}
      </Container>
    </Box>
  );
};

export default FullPageLayout;
