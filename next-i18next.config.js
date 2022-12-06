module.exports = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
