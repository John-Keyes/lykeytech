<script lang="ts">
    import {logoPng} from 'src/lib/helpers/static';
    import Button from '../button.svelte';

    interface MobileMenuType {
        menuOpen: boolean,
    }
    const mobileMenuRef = document.getElementById("mobile-menu-container");
    let props: MobileMenuType = $props();
    
</script>

        <div id="mobile-menu-container" class="flex-column bg-dark-purple" style="display: {props.menuOpen ? 'flex' : 'none'}">
            <div id="mobile-menu-top-container" aria-label="Mobile Menu Top Container" class="flex flex-row flex-center">
                <span id="mobile-menu-top-back-arrow" aria-label="Mobile Menu Top Back Arrow" role="button" tabindex="1" onclick={() => props.menuOpen = false} class="fa-solid cursor-pointer fa-chevron-left"></span>
                <h2 id="mobile-menu-top-title" aria-label="Mobile Menu Top Title">Menu</h2>
            </div>
            <div id="mobile-menu-list" aria-label="Mobile Menu List" class="flex flex-column flex-center">
                    <a id="mobile-menu-list-item-0" aria-label="Mobile Menu List Item 0" title="Mobile Menu List Item 0" href="#about" onclick={() => props.menuOpen = false} class="mobile-menu-list-item flex flex-row cursor-pointer">
                        <h3 id="mobile-menu-list-item-0-label" aria-label="Mobile Menu List Item 0 Label">About</h3> 
                        <span id="mobile-menu-list-item-0-icon" aria-label="Mobile Menu List Item 0 Icon" class="fa-solid fa-address-card"></span>
                    </a>
                    <a id="mobile-menu-list-item-1" aria-label="Mobile Menu List Item 1" title="Mobile Menu List Item 1" href="#samples" onclick={() => props.menuOpen = false} class="mobile-menu-list-item flex flex-row cursor-pointer">
                        <h3 id="mobile-menu-list-item-1-label" aria-label="Mobile Menu List Item 1 Label">Samples</h3>
                        <span id="mobile-menu-list-item-1-icon" aria-label="Mobile Menu List Item 1 Icon" class="fa-solid fa-code"></span>
                    </a>
                    <a id="mobile-menu-list-item-2" aria-label="Mobile Menu List Item 2" title="Mobile Menu List Item 2" href="#endorsements" onclick={() => props.menuOpen = false} class="mobile-menu-list-item flex flex-row cursor-pointer">
                        <h3 id="mobile-menu-list-item-2-label" aria-label="Mobile Menu List Item 2 Label">Endorsements</h3>
                        <span id="mobile-menu-list-item-2-icon" aria-label="Mobile Menu List Item 2 Icon" class="fa-solid fa-handshake"></span>
                    </a>
                    <a id="mobile-menu-list-item-3" aria-label="Mobile Menu List Item 3" title="Mobile Menu List Item 3" href="#socials" onclick={() => props.menuOpen = false} class="mobile-menu-list-item flex flex-row cursor-pointer">
                        <h3 id="mobile-menu-list-item-3-label" aria-label="Mobile Menu List Item 3 Label">Socials</h3>
                        <span id="mobile-menu-list-item-3-icon" aria-label="Mobile Menu List Item 3 Icon" class="fa-solid fa-user-group"></span>
                    </a>
                    <Button id="mobile-menu-list-item-contact" aria-label="Mobile Menu List Item Contact" title="Mobile Menu List Item Contact" className="bg-purple bg-hover-light-purple button-glow-purple">
                        <a id="mobile-menu-list-item-contact-link" aria-label="Mobile Menu List Item Contact Link" href="mailto:john.keyes@lykeytech.com">Contact Me</a>
                    </Button>
            </div>
            <div id="mobile-menu-logo-container" aria-label="Mobile Menu Logo Container" class="flex flex-center">
                <img id="mobile-menu-logo" aria-label="Mobile Menu Logo" alt="Logo" src={logoPng} width="80" height="80"/>
            </div>
        </div>

<style lang="scss">
    #mobile-menu {
    &-container {
        position: fixed;
        z-index: 3;
        top: 0;
        right: 0;
        transition: left 1s ease-in-out;
        border: 3px solid theme-color("light-purple");
        display: none;
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
        &-item {
            width: 100%;
            padding-left: 2rem;
            padding-right: 2rem;
            justify-content: space-between;
            align-items: center;
            transition: color 0.3s linear;
            &:hover {
                color: theme-color("lighter-purple");
            }
        }
    }
}
</style>    