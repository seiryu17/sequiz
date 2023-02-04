/** @type {import('next').NextConfig} */
// next.config.js
const withLess = require("next-with-less");

module.exports = withLess({
  env: {
    APP_ENV: process.env.APP_ENV,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  lessLoaderOptions: {
    /* ... */
  },
});
