import { NextPage } from "next";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import getServerSidePropsFromApollo from "../../utils/getServerSidePropsFromApollo";
import { PackageType, useGetPackageDetailQuery } from "../../graphql";

const GET_PACKAGE_DETAIL = gql`
  query GetPackageDetail($name: String!, $type: PackageType!) {
    package(name: $name, type: $type) {
      id
      name
    }
  }
`;

interface PackageDetailQuery {
  type: PackageType;
  name: string;
}

const PackageDetail: NextPage = () => {
  const { query } = useRouter();
  const { data } = useGetPackageDetailQuery({
    variables: (query as unknown) as PackageDetailQuery,
  });
  return <div>{JSON.stringify(data)}</div>;
};

export const getServerSideProps = getServerSidePropsFromApollo({
  query: GET_PACKAGE_DETAIL,
  getVariables: (context) => context.params,
});

export default PackageDetail;
