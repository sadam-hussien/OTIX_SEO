import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { Deals, How, RequireMents } from "modules/vip/components";
import Head from "next/head";

export default function Vip() {
  const { t } = useTranslation(["trade"]);
  return (
    <StaticLayout
      title={t("vip_title")}
      subtitle={t("vip_subtitle")}
      btn={{
        title: t("vip_btn_title"),
        path: "https://trade.otix.exchange/registration",
      }}
    >
      <Head>
        <title>VIP Trade</title>
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
      "home",
      "header",
      "footer",
      "global",
    ])),
  },
});
