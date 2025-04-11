/** @type {import('next').NextConfig} */


//const clientUrl = process.env.NODE_ENV == "production" ? "/lykeytech" : "";
const clientUrl = "";
module.exports = {
  basePath: clientUrl,
	reactStrictMode: true,
	output: "standalone",
  publicRuntimeConfig: {
    clientUrl
  }
};
