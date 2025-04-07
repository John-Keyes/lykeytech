/** @type {import('next').NextConfig} */

const mode = process.env.NODE_ENV;
module.exports = {
  basePath: mode == "production" ? "/lykeytech" : "", 
	reactStrictMode: true,
	output: "standalone"
};
