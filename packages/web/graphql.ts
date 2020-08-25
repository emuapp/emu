import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Mutation = {
  __typename?: "Mutation";
  createOnePackage: Package;
};

export type MutationCreateOnePackageArgs = {
  data: PackageCreateInput;
};

export type Package = {
  __typename?: "Package";
  id: Scalars["String"];
  name: Scalars["String"];
  type: PackageType;
};

export type PackageCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  type: PackageType;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export enum PackageType {
  Npm = "npm",
}

export type Query = {
  __typename?: "Query";
  package?: Maybe<Package>;
};

export type QueryPackageArgs = {
  name: Scalars["String"];
  type: PackageType;
};

export type GetPackageDetailQueryVariables = Exact<{
  name: Scalars["String"];
  type: PackageType;
}>;

export type GetPackageDetailQuery = { __typename?: "Query" } & {
  package?: Maybe<{ __typename?: "Package" } & Pick<Package, "id" | "name">>;
};

export const GetPackageDetailDocument = gql`
  query GetPackageDetail($name: String!, $type: PackageType!) {
    package(name: $name, type: $type) {
      id
      name
    }
  }
`;

/**
 * __useGetPackageDetailQuery__
 *
 * To run a query within a React component, call `useGetPackageDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPackageDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPackageDetailQuery({
 *   variables: {
 *      name: // value for 'name'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetPackageDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPackageDetailQuery,
    GetPackageDetailQueryVariables
  >
) {
  return Apollo.useQuery<GetPackageDetailQuery, GetPackageDetailQueryVariables>(
    GetPackageDetailDocument,
    baseOptions
  );
}
export function useGetPackageDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPackageDetailQuery,
    GetPackageDetailQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetPackageDetailQuery,
    GetPackageDetailQueryVariables
  >(GetPackageDetailDocument, baseOptions);
}
export type GetPackageDetailQueryHookResult = ReturnType<
  typeof useGetPackageDetailQuery
>;
export type GetPackageDetailLazyQueryHookResult = ReturnType<
  typeof useGetPackageDetailLazyQuery
>;
export type GetPackageDetailQueryResult = Apollo.QueryResult<
  GetPackageDetailQuery,
  GetPackageDetailQueryVariables
>;
