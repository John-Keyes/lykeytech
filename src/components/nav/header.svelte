<script lang="ts">
    import MobileMenu from './mobileMenu.svelte';
    import { logoGif } from '../../lib/helpers/static';
    import Fa from 'svelte-fa';
    import { faBars } from '@fortawesome/free-solid-svg-icons';
    import Button from '../button.svelte';

    let topNavRoot: HTMLDivElement;
    let menuOpen:boolean = $state(false);
</script>
    
            <div id="header-root" bind:this={topNavRoot} aria-label="Header Root" class="flex fit-width bg-dark-purple">
                <nav id="header-nav" aria-label="Header Navigation" class="flex fit-width content-container">
                    <div id="header-logo-container" aria-label="Header Logo Container">
                        <a id="header-logo-link" aria-label="Header Logo Link" title="Header Logo Link" href="/">
                            <img alt="Logo Gif" src={logoGif} width="55" height="50"/>
                        </a>
                    </div>
                    <div id="mobile-menu-container-visibility" aria-label="Mobile Menu Container Visibility">
                        <Button id="mobile-menu-button" aria-label="Mobile Menu Button" className="text-inherit border-none" onclick={() => menuOpen = !menuOpen}>
                            <Fa icon={faBars} id="mobile-menu-button-icon" color="bg" size="2x"/>
                        </Button>
                        <MobileMenu menuOpen={menuOpen}/>
                    </div>
                    <div id="header-route-container" aria-label="Header Route Container" class="route-container flex">
                        <a id="header-route-about" aria-label="Header Route About" title="Header Route About" class="route" href="#about">About</a>
                        <a id="header-route-samples" aria-label="Header Route Samples" title="Header Route Samples" class="route" href="#samples">Samples</a>
                        <a id="header-route-endorsements" aria-label="Header Route Endorsements" title="Header Route Endorsements" class="route" href="#endorsements">Endorsements</a>
                        <a id="header-route-socials" aria-label="Header Route Socials" title="Header Route Socials" class="route" href="#socials">Socials</a>
                    </div>
                </nav>
            </div>

<style lang="scss">
:global {
    .route {
        text-decoration: none; 
        font-weight: bold;
        font-size: 1.25rem;
        color: white;
        transition: color 0.3s linear;
        &:hover {
            color: var(--lighter-purple);
        }
        &-container {
            gap: 0.75rem;
            @media screen and (max-width: device-max("sm")) {
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
}
</style>