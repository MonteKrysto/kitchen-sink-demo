import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Outlet, Router } from "react-location";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { location, routes } from "./router";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ChakraProvider>
      <Router routes={routes} location={location}>
        <QueryClientProvider client={queryClient}>
          <Box bg='tomato' w='100%' p={4} color='white'>
            This is the Box
          </Box>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Router>
    </ChakraProvider>
  );
}
