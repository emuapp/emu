import { FC } from "react";
import Head from "next/head";
import Link from "next/link";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>X</title>
      </Head>
      <h1>Home</h1>
      <Link href="/npm/react">React</Link>
      <Link href="/npm/vue">Vue</Link>
    </>
  );
};

export default Home;
