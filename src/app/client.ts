import { cacheExchange, createClient, fetchExchange } from "urql";
import { registerUrql } from "@urql/next/rsc";

const makeClient = () => {
  return createClient({
    url: process.env.API_HOST ?? "http://localhost:3030/graphql",
    exchanges: [cacheExchange, fetchExchange],
  });
};

export const { getClient } = registerUrql(makeClient);
