import { useRouter } from 'next/router';
import { DefaultSeo, LogoJsonLd } from 'next-seo';
import { logoPng, logoGif, cmscritic, myPfp, qrCode, resilience, todoapp } from 'src/lib/helpers/static';

const THUMBNAIL = logoGif;
const DEFAULT_TITLE = "LyKeyTech – Building Better Applications";
const DEFAULT_DESCRIPTION = "I build web and mobile applications that help fulfill any need. I build applications with immersive user experiences and performance efficient applications.";
const KEYWORDS = "LyKey, Software,Development, Engineering, Software Engineering, Software Developer, Software Development, LyKeyTech, LyKey, Tech, Web Developer, Web Development, Mobile Development, Mobile Developer, Application, Application Development, App, Developer, Web, Mobile, Computer Science, Bachelor of Science, Computer, Science, Portfolio, Resume, Work Samples, Socials, Contact, App Development, Web Development, Web Services, Web Development Services";

const DefaultSEO = () => {
	const router = useRouter();
  	return (
    	<>
			<DefaultSeo
				defaultTitle={DEFAULT_TITLE}
				description={DEFAULT_DESCRIPTION}
				canonical="/"
				openGraph={{
					title: DEFAULT_TITLE,
					description: DEFAULT_DESCRIPTION,
					url: "/" + router.asPath,
					type: "website",
					locale: "en_US",
					siteName: "lykeytech",
					images: [
						{
							url: THUMBNAIL,
							alt: "Thumbnail"
						},
						{
							url: cmscritic,
							alt: "CMSCritic Media Website",
						},
						{
							url: logoPng,
							alt: "Logo PNG",
						},
						{
							url: logoGif,
							alt: "Logo GIF",
						},
						{
							url: myPfp,
							alt: "Profile picture",
						},
						{
							url: qrCode,
							alt: "Website QR Code",
						},
						{
							url: resilience,
							alt: "Resilience logo",
						},
						{
							url: todoapp,
							alt: "task todo",
						}
					]
				}}
				twitter={{
					cardType: "summary_large_image",
				}}
				additionalLinkTags={[
					{
						rel: "shortcut-icon",
						href: "/images/meta/favicon.ico",
						type: "image/x-icon"
					},
					{
						rel: "icon",
						type: "image/png",
						sizes: "16x16",
						href: "/images/meta/favicon-16x16.png",
					},
					{
						rel: "icon",
						type: "image/png",
						sizes: "32x32",
						href: "/images/meta/favicon-32x32.png",
					},
					{
						rel: "apple-touch-icon",
						type: "image/png",
						sizes: "180x180",
						href: "/images/meta/apple-touch-icon.png",
					},
					{
						rel: "manifest",
						href: "/site.webmanifest",
					},
					{
						rel: "mask-icon",
						href: "/images/meta/safari-pinned-tab.svg",
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
				logo={logoPng}
				name="lykeytech"
				url="http://lykeytech.com"
				id="http://lykeytech.com"
				type="website"
				headline="Lykeytech Apps"
			/>
    	</>
  	)
}

export default DefaultSEO;
