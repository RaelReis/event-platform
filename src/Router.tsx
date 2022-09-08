import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";

export function Router() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/lessons/:slug" element={<Event />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
}
