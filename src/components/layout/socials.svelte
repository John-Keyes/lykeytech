<script lang="ts">
    import SubTitle from "./subTitle.svelte";
    import Button from "../button.svelte";
    import { qrCode } from "../../lib/helpers/static";
    import Fa from 'svelte-fa';
    import { faGithub, faLinkedin, faUpwork, faInstagram, faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
</script>

                        <SubTitle id="socials" aria-label="Socials" sectionclassname="flex flex-column flex-center space-below">
                            {#snippet text()}
                                Contact!
                            {/snippet}
                            {#snippet body()}
                                <Button id="socials-message-button" aria-label="Socials Message Button" className="bg-purple bg-hover-light-purple button-glow-purple rounded-sm">
                                    <a id="socials-message-button-link" aria-label="Socials Message Button Link" title="Socials Message Button Link" href="mailto:johnschool432@gmail.com">Send Message</a>
                                </Button>
                                <img id="socials-qrcode" aria-label="Socials QRCode" class="space-above card-img-blur border border-light-purple button-glow-purple" src={qrCode} alt="Website QR Code" width="150" height="150"/>
                                <h3 id="socials-title" aria-label="Socials Title">Socials</h3>
                                <div id="socials-links-container" aria-label="Socials Links Container" class="flex flex-row">
                                    <a id="socials-link-0" aria-label="Socials Links 0" title="Socials Links 0" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                                        <Fa icon={faLinkedin} id="socials-link-icon-0" color="white" size="2x"/>
                                    </a>
                                    <a id="socials-link-1" aria-label="Socials Links 1" title="Socials Links 1" class="space-infront" href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">
                                        <Fa icon={faGithub} id="socials-link-icon-1" color="white" size="2x"/>
                                    </a>
                                    <a id="socials-link-2" aria-label="Socials Link 2" title="Socials Links 2" class="space-infront" href="https://www.upwork.com/freelancers/~018106e7e0817e9ad0" target="_blank" rel="noopener noreferrer">
                                        <Fa icon={faUpwork} id="socials-link-icon-2" color="white" size="2x"/>
                                    </a>
                                    <a id="socials-link-3" aria-label="Socials Link 3" title="Socials Links 3" class="space-infront" href="https://www.instagram.com/lykeytech" target="_blank" rel="noopener noreferrer">
                                        <Fa icon={faInstagram} id="socials-link-icon-3" color="white" size="2x"/>
                                    </a>
                                    <a id="socials-link-4" aria-label="Socials Link 4" title="Socials Links 4" class="space-infront" href="https://www.facebook.com/profile.php?id=61575014991131" target="_blank" rel="noopener noreferrer">
                                        <Fa icon={faFacebook} id="socials-link-icon-4" color="white" size="2x"/>
                                    </a>
                                    <a id="socials-link-5" aria-label="Socials Link 5" title="Socials Links 5" class="space-infront" href="https://www.youtube.com/@LyKeyTech" target="_blank" rel="noopener noreferrer">
                                        <Fa icon={faYoutube} id="socials-link-icon-5" color="white" size="2x"/>
                                    </a>
                                    <a id="socials-link-6" aria-label="Socials Link 6" title="Socials Links 6" class="space-infront" href="https://www.tiktok.com/@lykeytech" target="_blank" rel="noopener noreferrer">
                                        <Fa icon={faTiktok} id="socials-link-icon-6" color="white" size="2x"/>
                                    </a>
                                </div>
                                <p id="socials-label" aria-label="Socials Label" class="flex flex-column space-above">
                                    <span>
                                        This website was created solely by John Keyes.
                                    </span>
                                    <span class="space-infront">
                                        Powered by Svelte, TypeScript, SCSS, and Github.
                                    </span>
                                </p>
                            {/snippet}
                        </SubTitle>