import { Link } from "react-router-dom";
import { Box, Stack, Link as ChakraLink } from "@chakra-ui/react";

export function Menu() {

  return (
    <Box as="nav" p={4} bg="gray.800">
      <Stack direction="column" spacing={4} justifyContent="left">
        <Box>
          <ChakraLink as={Link} to="/" color="white">
            Home
          </ChakraLink>
        </Box>
        <Box>
          <ChakraLink as={Link} to="/aboutus" color="white">
            Sobre Nosotros
          </ChakraLink>
        </Box>
        <Box>
          <ChakraLink as={Link} to="/aboutus/:tareas" color="white">
            Tareas
          </ChakraLink>
        </Box>
      </Stack>
    </Box>
  );
    /*return (
      <nav>
        <ul>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/aboutus">Sobre Nosotros</Link>
          </ul>
          <ul>
            <Link to="/aboutus/:tareas">Tareas</Link>
          </ul>
        </ul>
      </nav>
    );*/
}