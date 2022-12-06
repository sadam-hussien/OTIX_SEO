import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { Deals, How, RequireMents } from "modules/otc/components";
import Head from "next/head";

export default function Otc() {
  const { t } = useTranslation(["trade"]);
  return (
    <StaticLayout
      title={t("otc_title")}
      subtitle={t("otc_subtitle")}
      btn={{
        title: t("otc_btn_title"),
        path: "https://trade.otix.exchange/registration",
      }}
    >
      <Head>
        <title>OTC</title>
      </Head>
      <section className="pt pb">
        <Deals />
        <How />
        <RequireMents />
      </section>
    </StaticLayout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "trade",
      "foreignTrade",
      "header",
      "footer",
      "global",
    ])),
  },
});
