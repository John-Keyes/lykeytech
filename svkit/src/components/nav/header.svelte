<script lang="ts">
    import Link from 'next/link';
    import MobileMenu from './mobileMenu';
    import { logoGif } from 'src/lib/helpers/static';

    let topNavRoot = useRef<HTMLDivElement>(null);
    let menuOpen:boolean = $state(false);
</script>
    
            <div ref={topNavRoot} id="header-root" aria-label="Header Root" class="flex fit-width bg-dark-purple">
                <nav id="header-nav" aria-label="Header Navigation" class="flex fit-width content-container">
                    <div id="header-logo-container" aria-label="Header Logo Container">
                        <Link id="header-logo-link" aria-label="Header Logo Link" title="Header Logo Link" href="/">
                            <img alt="Logo Gif" src={logoGif} width="55" height="50"/>
                        </Link>
                    </div>
                    <div id="mobile-menu-container-visibility" aria-label="Mobile Menu Container Visibility">
                        <span class="fa-solid fa-bars fa-xl cursor-pointer" onClick={() => menuOpen = !menuOpen}></span>
                        <MobileMenu menuOpen={menuOpen}/>
                    </div>
                    <div id="header-route-container" aria-label="Header Route Container" class="route-container flex">
                        <Link id="header-route-about" aria-label="Header Route About" title="Header Route About" class="route" href="#about">About</Link>
                        <Link id="header-route-samples" aria-label="Header Route Samples" title="Header Route Samples" class="route" href="#samples">Samples</Link>
                        <Link id="header-route-endorsements" aria-label="Header Route Endorsements" title="Header Route Endorsements" class="route" href="#endorsements">Endorsements</Link>
                        <Link id="header-route-socials" aria-label="Header Route Socials" title="Header Route Socials" class="route" href="#socials">Socials</Link>
                    </div>
                </nav>
            </div>

<style lang="scss">
    .route {
        text-decoration: none; 
        font-weight: bold;
        font-size: 1.25rem;
        color: white;
        transition: color 0.3s linear;
        &:hover {
            color: theme-color("lighter-purple");
        }
        &-container {
            gap: 0.75rem;
            @media screen and (max-width: device-max("md")) {
                display: none;
            }
        }
    }

    #mobile-menu-container-visibility {
        display: flex;
        @media screen and (min-width: device-min("lg")) {
            display: none;
        }
    }

    #header {
        &-root {
            position: fixed;
            z-index: 5;
            top: 0;
            left: 0;
            height: 80px;
        }
        &-nav {
            justify-content: space-between;
            overflow: hidden;
            align-items: center;
            padding-left: 1rem;
            padding-right: 1rem;
        }
        &-logo-container {
            border: 2px solid white;
        }
    }
</style>