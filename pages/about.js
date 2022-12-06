import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { Content } from "modules/about/components";

import {
  OurMission,
  OurVision,
  PartnersSection,
} from "modules/home/components";
import Head from "next/head";

export default function About() {
  const { t } = useTranslation(["about"]);
  return (
    <StaticLayout
      title={t("about_title")}
      subtitle={t("about_subtitle")}
      btn={{ title: t("btn_title"), path: "/support" }}
    >
      <Head>
        <title>about</title>
      </Head>
      <Content />
      <OurMission />
      <OurVision />

      <PartnersSection />
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
