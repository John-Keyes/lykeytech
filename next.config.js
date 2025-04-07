/** @type {import('next').NextConfig} */

let clientUrl = process.env.CLIENT_URL;
if(process.env.MODE == "dev") {
  clientUrl = "http://localhost";
  clientUrl = `${clientUrl}:${process.env.CLIENT_PORT}`;
}
module.exports = {
	reactStrictMode: true,
	output: "standalone",
	publicRuntimeConfig: {
		mode: process.env.MODE,
    clientUrl,
    apiUrl
	},
	images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ]
  }
};
