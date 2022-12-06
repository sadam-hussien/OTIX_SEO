import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { FeesCard } from "modules/fees/components";

import { Container } from "react-bootstrap";

import Head from "next/head";

export default function Fees() {
  const { t } = useTranslation(["fees"]);
  return (
    <StaticLayout
      title={t("fees_title")}
      subtitle={t("fees_subtitle")}
      btn={{ title: t("btn_title"), path: "/market" }}
    >
      {" "}
      <Head>
        <title>Fees</title>
      </Head>
      <Container>
        <section className="pt pb">
          <FeesCard
            subtitle="deposit"
            title="wire_transfer"
            desc="wire_desc"
            notes={[
              "wire_transfer_note_1",
              "wire_transfer_note_2",
              "wire_transfer_note_3",
            ]}
            countries={[
              "UAE",
              "KSA",
              "Kuwait",
              "Bahrain",
              "Oman",
              "Jordan",
              "Algeria",
              "Egypt",
              "Lebanon",
              "Morocco",
              "Tunisia",
            ]}
            fees="0% - Zero Fees"
          />
          <FeesCard
            subtitle="for_deposit_only"
            title="easy_funding"
            desc="easy_funding_desc"
            notes={[
              "easy_funding_note_1",
              "easy_funding_note_2",
              "easy_funding_note_3",
            ]}
            countries={["UAE", "KSA", "Kuwait"]}
            fees="Max 0.55%"
            icon={<i className="las la-coins"></i>}
          />
        </section>
      </Container>
    </StaticLayout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "fees",
      "header",
      "footer",
      "global",
    ])),
  },
});
