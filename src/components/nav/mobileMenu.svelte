<script lang="ts">
    import {logoPng} from '../../lib/helpers/static';
    import Button from '../button.svelte';
    import Fa from 'svelte-fa';
    import { faAddressCard, faChevronLeft, faCode, faHandshake, faUserGroup } from '@fortawesome/free-solid-svg-icons';

    interface MobileMenuType {
        menuOpen: boolean;
    }
    let { menuOpen }: MobileMenuType = $props();
</script>

        <div id="mobile-menu-container" class="flex-column bg-dark-purple" style={`display: ${menuOpen ? "flex" : "none"}`}>
            <div id="mobile-menu-top-container" aria-label="Mobile Menu Top Container" class="flex flex-row flex-center">
                <Button id="mobile-menu-top-back-button" aria-label="Mobile Menu Top Back Button" className="bg-purple bg-hover-light-purple button-glow-purple text-inherit rounded-sm cursor-pointer" onclick={() => menuOpen = false}>
                    <Fa icon={faChevronLeft} id="mobile-menu-top-back-arrow" color="white"/>
                </Button>
                <h2 id="mobile-menu-top-title" aria-label="Mobile Menu Top Title">Menu</h2>
            </div>
            <div id="mobile-menu-list" aria-label="Mobile Menu List" class="flex flex-column flex-center">
                    <a id="mobile-menu-list-item-0" aria-label="Mobile Menu List Item 0" title="Mobile Menu List Item 0" href="#about" onclick={() => menuOpen = false} class="mobile-menu-list-item">
                        <h3 id="mobile-menu-list-item-0-label" aria-label="Mobile Menu List Item 0 Label">About</h3> 
                        <Fa icon={faAddressCard} id="mobile-menu-list-item-0-fa-icon" color="white"/>
                    </a>
                    <a id="mobile-menu-list-item-1" aria-label="Mobile Menu List Item 1" title="Mobile Menu List Item 1" href="#samples" onclick={() => menuOpen = false} class="mobile-menu-list-item">
                        <h3 id="mobile-menu-list-item-1-label" aria-label="Mobile Menu List Item 1 Label">Samples</h3>
                        <Fa icon={faCode} id="mobile-menu-list-item-1-fa-icon" color="white"/>
                    </a>
                    <a id="mobile-menu-list-item-2" aria-label="Mobile Menu List Item 2" title="Mobile Menu List Item 2" href="#endorsements" onclick={() => menuOpen = false} class="mobile-menu-list-item">
                        <h3 id="mobile-menu-list-item-2-label" aria-label="Mobile Menu List Item 2 Label">Endorsements</h3>
                        <Fa icon={faHandshake} id="mobile-menu-list-item-2-fa-icon" color="white"/>
                    </a>
                    <a id="mobile-menu-list-item-3" aria-label="Mobile Menu List Item 3" title="Mobile Menu List Item 3" href="#socials" onclick={() => menuOpen = false} class="mobile-menu-list-item">
                        <h3 id="mobile-menu-list-item-3-label" aria-label="Mobile Menu List Item 3 Label">Socials</h3>
                        <Fa icon={faUserGroup} id="mobile-menu-list-item-3-fa-icon" color="white"/>
                    </a>
                    <Button id="mobile-menu-list-item-contact" aria-label="Mobile Menu List Item Contact" title="Mobile Menu List Item Contact" className="bg-purple bg-hover-light-purple button-glow-purple rounded-sm">
                        <a id="mobile-menu-list-item-contact-link" aria-label="Mobile Menu List Item Contact Link" href="mailto:john.keyes@lykeytech.com">Contact Me</a>
                    </Button>
            </div>
            <div id="mobile-menu-logo-container" aria-label="Mobile Menu Logo Container" class="flex flex-center">
                <img id="mobile-menu-logo" aria-label="Mobile Menu Logo" alt="Logo" src={logoPng} width="80" height="80"/>
            </div>
        </div>

<style lang="scss">
:global {
    #mobile-menu {
        &-container {
            position: fixed;
            z-index: 3;
            top: 0;
            right: 0;
            transition: left 1s ease-in-out;
            border: 3px solid var(--light-purple);
        }
        &-top-container {
            font-size: 16px;
            justify-content: space-between;
            align-items: center;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
        &-list {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
    }

    .mobile-menu-list-item {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding-left: 2rem;
        padding-right: 2rem;
        justify-content: space-between;
        align-items: center;
        transition: color 0.3s linear;
        cursor: pointer;
        &:active > * {
            color: theme-color("lighter-purple");
            fill: theme-color("lighter-purple");
        }
        & h3:hover {
            color: theme-color("lighter-purple");
        }
        & svg g g path:hover {
            fill: theme-color("lighter-purple");
        }
    }
}
</style>    