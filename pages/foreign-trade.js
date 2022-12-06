import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
  Deals,
  How,
  InfoSection,
  RequireMents,
} from "modules/foreignTrade/components";

import Head from "next/head";

export default function ForeignTrade() {
  return (
    <section className="foreign-page">
      <Head>
        <title>foreign trade</title>
      </Head>
      <InfoSection />
      <Deals />
      <How />
      <RequireMents />
    </section>
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
