import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import { Container } from "react-bootstrap";

import StaticLayout from "layout/main/StaticLayout";

import Head from "next/head";

export default function Affiliate() {
  const { t } = useTranslation(["global"]);
  return (
    <StaticLayout
      title={t("affiliate_title")}
      subtitle={t("affiliate_subtitle")}
    >
      <Head>
        <title>affiliate</title>
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
      "home",
      "about",
      "header",
      "footer",
      "global",
    ])),
  },
});
