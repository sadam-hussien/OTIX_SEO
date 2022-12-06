import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
  LandingSection,
  WaysSection,
  ProductsSection,
  StartedSection,
  PartnersSection,
  CoinsSection,
  PortfolioSection,
  About,
  OurMission,
  OurVision,
} from "modules/home/components";

import Head from "next/head";

export default function Home() {
  return (
    <div className="home-page">
      <Head>
        <title>Home</title>
      </Head>
      <LandingSection />
      <CoinsSection />
      <About />
      <StartedSection />
      <OurMission />
      <WaysSection />
      <OurVision />
      <ProductsSection />
      <PortfolioSection />
      <PartnersSection />
    </div>
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
