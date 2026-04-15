<script lang="ts">
import { logoPng, logoGif, cmscritic, myPfp, qrCode, resilience, todoapp, codeCS, resume } from '../lib/helpers/static';

interface SeoTypeProps {
    title?: string;
    description?: string;
    keywords?: string;
    thumbnail?: string;
}
let props: SeoTypeProps = $props();
const title = props.title || "LyKeyTech – Building Better Applications";
const description = props.description || "I build web and mobile applications that help fulfill any need. I build applications with immersive user experiences and performance efficient applications.";
const keywords = props.keywords || "LyKey, Software, Development, Engineering, Software Engineering, Software Developer, Software Development, LyKeyTech, LyKey, Tech, Web Developer, Web Development, Mobile Development, Mobile Developer, Application, Application Development, App, Developer, Web, Mobile, Computer Science, Bachelor of Science, Computer, Science, Portfolio, Resume, Work Samples, Socials, Contact, App Development, Web Development, Web Services, Web Development Services";
const thumbnail = props.thumbnail || logoGif;

</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}>
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:title" content={title}>
    <meta property="og:description" content={description}>
    <meta property="og:type" content="website">
    <meta property="og:url" content="//">
    <meta property="og:image" content={thumbnail}>
    <meta property="og:image:alt" content="Thumbnail">
    <meta property="og:image" content={cmscritic}>
    <meta property="og:image:alt" content="CMSCritic Media Website">
    <meta property="og:image" content={logoPng}>
    <meta property="og:image:alt" content="Logo PNG">
    <meta property="og:image" content={logoGif}>
    <meta property="og:image:alt" content="Logo GIF">
    <meta property="og:image" content={myPfp}>
    <meta property="og:image:alt" content="Profile picture">
    <meta property="og:image" content={qrCode}>
    <meta property="og:image:alt" content="Website QR Code">
    <meta property="og:image" content={resilience}>
    <meta property="og:image:alt" content="Resilience logo">
    <meta property="og:image" content={todoapp}>
    <meta property="og:image:alt" content="task todo">
    <meta property="og:locale" content="en_US">
    <meta property="og:site_name" content="lykeytech">
    <link rel="canonical" href="/">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content={keywords}>
    <meta name="author" content="John Keyes">
    <meta name="https" content="1">
    <link rel="shortcut-icon" href="/images/meta/favicon.ico" type="image/x-icon">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/meta/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/meta/favicon-32x32.png">
    <link rel="apple-touch-icon" type="image/png" sizes="152x152 167x180 180x180" href="/images/meta/apple-touch-icon.png">
    <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="/images/meta/apple-touch-icon-152x152-precomposed.png">
    <link rel="apple-touch-icon" type="image/png" sizes="167x167" href="/images/meta/apple-touch-icon-167x167-precomposed.png">
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/images/meta/apple-touch-icon-180x180-precomposed.png">
    <link rel="manifest" href="/site.webmanifest">
    <!--link rel="mask-icon" href="/images/meta/safari-pinned-tab.svg" color="#000000"-->
    <script type="application/ld+json">
        {
            "@context":"https://schema.org",
            "@type":"website",
            "@id":"https://lykeytech.com",
            "logo":"/images/logo.png",
            "name":"lykeytech",
            "url":"https://lykeytech.com",
            "headline":"Lykeytech Apps"
        }
    </script>
    <meta name="robots" content="index,follow">
    <!--link rel="preload" href={cmscritic} as="image">
    <link rel="preload" href={codeCS} as="image">
    <link rel="preload" href={logoGif} as="image">
    <link rel="preload" href={logoPng} as="image">
    <link rel="preload" href={myPfp} as="image">
    <link rel="preload" href={qrCode} as="image">
    <link rel="preload" href={resilience} as="image">
    <link rel="preload" href={todoapp} as="image">
    <link rel="preload" href={resume}-->
    <link data-next-font="size-adjust" rel="preconnect" href="/" crossorigin="anonymous">
</svelte:head>
