import { DocumentNode } from "@apollo/client";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { initializeApollo } from "../apollo";

type GetVariables<Variables, Query extends ParsedUrlQuery = ParsedUrlQuery> = (
  context: GetServerSidePropsContext<Query>
) => Variables;

interface getServerSidePropsFromApolloParams<
  Variables,
  Query extends ParsedUrlQuery = ParsedUrlQuery
> {
  query: DocumentNode;
  variables?: Variables;
  getVariables?: GetVariables<Variables, Query>;
}
const getServerSidePropsFromApollo = <
  Variables = unknown,
  Query extends ParsedUrlQuery = ParsedUrlQuery
>(
  params: getServerSidePropsFromApolloParams<Variables, Query>
) => async (
  context: GetServerSidePropsContext<Query>
): Promise<{
  props: {
    initialApolloState: Record<string, unknown>;
  };
}> => {
  const apolloClient = initializeApollo();
  const { query, variables = params.getVariables(context) } = params;
  await apolloClient.query({
    query,
    variables,
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default getServerSidePropsFromApollo;
