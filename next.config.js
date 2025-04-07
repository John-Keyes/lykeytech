/** @type {import('next').NextConfig} */

const mode = process.env.NODE_ENV;
module.exports = {
  basePath: mode == "production" ? "/nextjs-blog-deployment" : "", 
	reactStrictMode: true,
	output: "standalone"
};
