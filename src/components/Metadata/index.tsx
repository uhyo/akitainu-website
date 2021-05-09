import { useRouter } from "next/dist/client/router";
import Head from "next/head";

type Props = {
  title: string;
};

export const Metadata: React.VFC<Props> = ({ title }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@uhyo_" />
      <meta
        property="og:url"
        content={"https://akitainu.vercel.app" + router.asPath}
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Akitainu helps unifying linting workflows in node.js projects."
      />
      <meta
        property="og:image"
        content="https://akitainu.vercel.app/images/akitainu_icon.png"
      />
    </Head>
  );
};
