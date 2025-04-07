import getConfig from "next/config";

const {publicRuntimeConfig: {clientUrl}} = getConfig();

export const resume = `${clientUrl}/docs/john-keyes_resume.docx`;

export const myPfp = `${clientUrl}/images/john-keyes-pfp.png`;
export const logo = `${clientUrl}/images/logo.png`;
export const logoIcon = `${clientUrl}/images/logoicon.png`;
export const starter1 = `${clientUrl}/images/starter1.png`;
export const starter2 = `${clientUrl}/images/starter2.png`;
export const starter3 = `${clientUrl}/images/starter3.png`;
export const starter4 = `${clientUrl}/images/starter4.png`;