import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { Container } from "react-bootstrap";

import Head from "next/head";

export default function Security() {
  const { t } = useTranslation(["security"]);
  return (
    <StaticLayout title={t("security_title")} subtitle={t("security_subtitle")}>
      <Head>
        <title>Security</title>
      </Head>
      <section className="pt pb">
        <Container>
          <p>{t("security_content")}</p>
        </Container>
      </section>
    </StaticLayout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "security",
      "header",
      "footer",
      "global",
    ])),
  },
});
