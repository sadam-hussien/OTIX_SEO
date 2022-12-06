import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import { Container } from "react-bootstrap";

import StaticLayout from "layout/main/StaticLayout";

import Head from "next/head";

export default function Referral() {
  const { t } = useTranslation(["global"]);
  return (
    <StaticLayout title={t("referral_title")} subtitle={t("referral_subtitle")}>
      <Head>
        <title>Referral</title>
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
      "header",
      "footer",
      "global",
    ])),
  },
});
