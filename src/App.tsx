import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Outlet, Router } from "react-location";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { location, routes } from "./router";

export const queryClient = new QueryClient();

export default function App() {
  return (
    <ChakraProvider>
      <Router routes={routes} location={location}>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Router>
    </ChakraProvider>
  );
}
