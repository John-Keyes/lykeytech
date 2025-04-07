/** @type {import('next').NextConfig} */


const clientUrl = process.env.NODE_ENV == "production" ? "/lykeytech" : "";
module.exports = {
  basePath: clientUrl,
	reactStrictMode: true,
	output: "standalone",
  publicRuntimeConfig: {
    clientUrl
  }
};
