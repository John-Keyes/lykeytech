import { useRouter } from 'next/router';
import { DefaultSeo, LogoJsonLd } from 'next-seo';
import getConfig from 'next/config';

const {publicRuntimeConfig: {clientUrl}} = getConfig();

//const THUMBNAIL = ".png";
const DEFAULT_TITLE = "LyKeyTech – Tech partner who can built web and mobile apps";
const DEFAULT_DESCRIPTION = "LyKeyTech";
/*const KEYWORDS= ["LyKey", "Software,Development", "Engineering", "Software Engineering", "Software Developer", "Software Development", 
	"LyKeyTech", "LyKey", "Tech", "Web Developer", "Web Development", "Mobile Development", "Mobile Developer", "Application", 
	"Application Development", "App", "Developer", "Web", "Mobile", "Computer Science", "Bachelor of Science", "Computer", "Science"
	"Portfolio", "Resume", "Work Samples", "Socials", "Contact"
];*/
const KEYWORDS = "LyKey, Software,Development, Engineering, Software Engineering, Software Developer, Software Development, LyKeyTech, LyKey, Tech, Web Developer, Web Development, Mobile Development, Mobile Developer, Application, Application Development, App, Developer, Web, Mobile, Computer Science, Bachelor of Science, Computer, Science, Portfolio, Resume, Work Samples, Socials, Contact";

const DefaultSEO = () => {
	const router = useRouter();
  	return (
    	<>
			<DefaultSeo
				defaultTitle={DEFAULT_TITLE}
				description={DEFAULT_DESCRIPTION}
				canonical={clientUrl}
				openGraph={{
					title: DEFAULT_TITLE,
					description: DEFAULT_DESCRIPTION,
					url: clientUrl + router.asPath,
					type: "website",
					locale: "en_US",
					siteName: "SFS1",
					/*images: [
						{
							url: THUMBNAIL,
							alt: "Thumbnail"
						}
					],*/
				}}
				twitter={{
					cardType: "summary_large_image",
				}}
				additionalLinkTags={[
					{
						rel: "shortcut-icon",
						href: `/images/meta/favicon.ico`,
						type: "image/x-icon"
					},
					{
						rel: "icon",
						type: "image/png",
						sizes: "16x16",
						href: `/images/meta/favicon-16x16.png`,
					},
					{
						rel: "icon",
						type: "image/png",
						sizes: "32x32",
						href: `/images/meta/favicon-32x32.png`,
					},
					{
						rel: "apple-touch-icon",
						type: "image/png",
						sizes: "180x180",
						href: `/images/meta/apple-touch-icon.png`,
					},
					{
						rel: "manifest",
						href: `/site.webmanifest`,
					},
					{
						rel: "mask-icon",
						href: `/images/meta/safari-pinned-tab.svg`,
						color: "#000000",
					},
				]}
				additionalMetaTags={[
					{
						httpEquiv: "x-ua-compatible",
						content: "IE=edge"
					},
					{
						name: "viewport",
						content: "width=device-width, initial-scale=1.0",
					},
					{
						name: "keywords",
						content: KEYWORDS
					},
					{
						name: "author",
						content: "John Keyes",
					},
					{
						name: "https",
						content: "1",
					},
				]}
			/>

			<LogoJsonLd
				logo={`${clientUrl}/images/logo.png`}
				url={clientUrl as string}
			/>
    	</>
  	)
}

export default DefaultSEO
