const Sitemap = require("react-router-sitemap").default;
const path = require("path");
const router = require("./src/routes"); // Make sure this points to your actual routes file

const buildSitemap = () => {
  return new Sitemap(router)
    .build("https://www.mabytes.com") // MA BYTES website URL
    .save(path.resolve(__dirname, "public", "sitemap.xml"));
};

buildSitemap();
