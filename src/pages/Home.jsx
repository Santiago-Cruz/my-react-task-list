
import { Center, Heading } from "@chakra-ui/react";

export function Home() {
  return (
    <Center  h="200px" borderBlockEndColor="yellow">
      <Heading as="h1" size="xl" color="white">
        BIENVENIDO QUERIDO USUARIO A MI TASK LIST
      </Heading>
    </Center>
  );
}