import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Container } from "react-bootstrap";

import TabTable from "modules/home/components/Tab";

import Head from "next/head";

export default function Prices() {
  return (
    <section className="pt pb coins-section prices-page">
      <Head>
        <title>Market</title>
      </Head>
      <Container>
        <TabTable />
      </Container>
    </section>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "home",
      "header",
      "footer",
      "global",
    ])),
  },
});
