import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import { Container } from "react-bootstrap";

import StaticLayout from "layout/main/StaticLayout";

import { InnerTitle, Listing, ContainerInner } from "components";

import Head from "next/head";

export default function CookiePolicy() {
  const { t } = useTranslation(["global"]);
  return (
    <StaticLayout title={t("cookie_title")} subtitle={t("cookie_subtitle")}>
      <Head>
        <title>Cookie Policy</title>
      </Head>
      <Container>
        <section className="pt pb">
          <p className="terms-content">
            {t(
              "Otix Exchange UAB (“otix.exchange”, “the Compnay”, “Company”, 'We,' 'Our,' or 'Us,'). any related software, forums, blogs, social media pages, and other relevant platforms operated or maintained by otix.exchange ('Website') (hence referred to as 'platform'). By accessing our website or using our Services, you signify acceptance of this Policy"
            )}
          </p>

          <p className="terms-content">
            {t(
              "A cookie is a little text file that a website (whose domain names include but are not limited to www.otix.exchange), mobile applications, clients, applets and other applications that are developed to offer otix.exchange, places on your computer and your mobile app, they are extensively used to improve the efficiency of websites as well as to offer information on the functionality and behavior of website visitors. Cookie improves your interaction with the company website and the website's interaction with you, a cookie does not hold any of your personal information, they are frequently used to improve the efficiency of websites and to offer information on the functionality and behavior of website visitors"
            )}
          </p>
          <InnerTitle title={t("What are the cookies")} sub />

          <p className="terms-content">
            {t(
              "A cookie is a text-only string of information that a website transmits to your browser's cookie file so that the website may recognize you when you return and remember some information about you. This can include the website you viewed, menu selections, any particular information you provided into forms, the time and date of your visit, and Cookies that the company utilizes"
            )}
          </p>
          <InnerTitle
            title={t("A cookie does not hold any of your personal information")}
            sub
          />

          <p className="terms-content">
            {t(
              "This Cookie Policy may be changed at any moment without notice. You consent to the installation of cookies on your computer in line with the terms of this policy by using our Site. If you do not want to accept cookies from our Site, simply disable cookies or do not use our website. Please keep in mind that if you disable cookies in your browser settings, our Site may not work properly."
            )}
          </p>

          <p className="terms-content">
            {t(
              "In some situations, we may collect personal information or information that becomes personal information when combined with other information using cookies and similar technologies. In such instances, the Company Privacy Policy shall take precedence over this Cookie Policy"
            )}
          </p>

          <InnerTitle title={t("Our use of cookies")} sub />

          <p className="terms-content">
            {t(
              "Strictly necessary cookies: These cookies are required for you to navigate a website and utilize its features, such as accessing secure portions of a website. The services you have requested cannot be performed without these cookies"
            )}
          </p>

          <p className="terms-content">
            {t(
              "Performance cookies: These cookies gather information about how users use the company website, such as which pages they visit most frequently and if they receive error messages from our website. These cookies do not gather the information that may be used to identify a visitor. All information gathered by these cookies is aggregated and hence anonymous. It is solely used to improve the functionality of the Company website"
            )}
          </p>

          <p className="terms-content">
            {t(
              "Functionality cookies: These cookies enable the Company website to remember your selections (such as your username, language, or location) and deliver improved more personalized services. For example, the company website may be able to offer your local news by saving the region in which you are now located in a cookie. These cookies can also be used to remember changes to text size, typefaces, and other components of the website that you can edit. They may also be used to offer services that you have requested, these cookies may anonymize the information they gather and cannot follow your browsing activity on other websites"
            )}
          </p>

          <InnerTitle
            title={t("We use Cookie for the following purposes, namely")}
            sub
          />

          <Listing
            translation={""}
            list={[
              "authentication",
              "security",
              "performance, analytics, and personalization",
              "marketing",
              "as described in our Privacy Policy",
            ]}
          />

          <InnerTitle
            title={t("How long will a cookie stay on my device")}
            sub
          />

          <p className="terms-content">
            {t(
              "The duration of a cookie on your computer or mobile device is determined by whether it is a 'persistent' or 'session' cookie. Session cookies are only stored on your device until you close your browser. Cookies that are persistent remain on your computer or mobile device until they expire or are erased"
            )}
          </p>

          <InnerTitle title={t("Refusing cookies on our website")} sub />

          <p className="terms-content">
            {t(
              "Most browsers are set to accept cookies by default. You may, however, block cookies if you desire, typically by adjusting your computer programmer surfing settings. It may also be possible to change your browser settings to accept particular cookies or to inform you when a new cookie is going to be stored on your computer, giving you the option of accepting or rejecting the cookie. There are several tools available to help you manage your cookie usage, such as the 'Help' area of your browser"
            )}
          </p>
          <p className="terms-content">
            {t(
              "Because our cookies allow you to access some of our Site’s critical features, we recommend that you leave cookies enabled; alternatively, if cookies are deactivated, you may experience restricted functionality or be stopped from accessing our Site entirely."
            )}
          </p>

          <InnerTitle title={t("How to control and delete cookies")} sub />

          <p className="terms-content">
            {t(
              "We make every effort to provide you with options over the personal information you supply to us. You may need to change the settings on your computer and/or device to prevent the company website from collecting information about you, but this may prohibit you from using all of the company website's services"
            )}
          </p>

          <Listing
            translation={""}
            list={[
              "Tracking Technologies: You may be able to configure your browser or device to reject all or certain browser cookies, or to notify you when cookies are transmitted. Some portions of the Website may become unavailable or malfunction if you disable or refuse cookies or prevent the usage of other Location Information: Through the device's privacy settings, you may select whether or not to enable the Website to collect and utilize real-time information about your device's location. If you disable the usage of location information, some or all of the website may become unavailable or malfunction",
              "Social Ad Platforms: You can opt-out of the remarketing and tracking features of the Social Ad Platforms by contacting each network directly. PLEASE BE ADVISED THAT monitoring and targeting by Social Ad Platforms is offered in exchange for your participation in the Social Ad Platforms, and the real type and scope of personal information collection and processing undertaken by such Social Ad Platforms may be unknown to us. If you want to learn more or make any inquiries about this nature or scope, please contact each Social Ad Platform directly",
            ]}
          />
        </section>
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
