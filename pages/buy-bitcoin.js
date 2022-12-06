import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import { Container } from "react-bootstrap";

import StaticLayout from "layout/main/StaticLayout";

import Head from "next/head";

export default function ByBitcoin() {
  const { t } = useTranslation(["global"]);
  return (
    <StaticLayout
      title={t("buy_bitcoin_title")}
      subtitle={t("buy_bitcoin_subtitle")}
    >
      <Head>
        <title>Buy Bitcoin</title>
      </Head>
      <Container>
        <section className="pt pb"></section>
      </Container>
    </StaticLayout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "blog",
      "header",
      "footer",
      "global",
    ])),
  },
});
