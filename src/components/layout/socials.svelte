<script lang="ts">
    import SubTitle from "./subTitle.svelte";
    import Button from "../button.svelte";
    import { qrCode } from "../../lib/helpers/static";
</script>

                        <SubTitle id="socials" aria-label="Socials" sectionclassname="flex flex-column flex-center space-below">
                            {#snippet text()}
                                Contact!
                            {/snippet}
                            {#snippet body()}
                                <Button id="socials-message-button" aria-label="Socials Message Button" className="bg-purple bg-hover-light-purple button-glow-purple">
                                    <a id="socials-message-button-link" aria-label="Socials Message Button Link" title="Socials Message Button Link" href="mailto:john.keyes@lykeytech.com">Send Message</a>
                                </Button>
                                <img id="socials-qrcode" aria-label="Socials QRCode" class="space-above card-img-blur border border-light-purple button-glow-purple" src={qrCode} alt="Website QR Code" width="150" height="150"/>
                                <h3 id="socials-title" aria-label="Socials Title">Socials</h3>
                                <div id="socials-links-container" aria-label="Socials Links Container" class="flex flex-row">
                                    <a id="socials-link-0" aria-label="Socials Links 0" title="Socials Links 0" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                                        <span id="socials-link-icon-0" aria-label="Socials Links Icon 0" class="fa-brands fa-linkedin fa-2xl text-hover-clear-blue"></span>
                                    </a>
                                    <a id="socials-link-1" aria-label="Socials Links 1" title="Socials Links 1" class="space-infront" href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">
                                        <span id="socials-link-icon-1" aria-label="Socials Links Icon 1" class="fa-brands fa-github fa-2xl text-hover-lighter-purple"></span>
                                    </a>
                                    <a id="socials-link-2" aria-label="Socials Link 2" title="Socials Links 2" class="space-infront" href="https://www.upwork.com/freelancers/~018106e7e0817e9ad0" target="_blank" rel="noopener noreferrer">
                                        <span id="socials-link-icon-2" aria-label="Socials Links Icon 2" class="fa-brands fa-upwork fa-2xl text-hover-clear-blue"></span>
                                    </a>
                                    <a id="socials-link-3" aria-label="Socials Link 3" title="Socials Links 3" class="space-infront" href="https://www.instagram.com/lykeytech" target="_blank" rel="noopener noreferrer">
                                        <span id="socials-link-icon-3" aria-label="Socials Links Icon 3" class="fa-brands fa-instagram fa-2xl text-hover-lighter-purple"></span>
                                    </a>
                                    <a id="socials-link-4" aria-label="Socials Link 4" title="Socials Links 4" class="space-infront" href="https://www.facebook.com/profile.php?id=61575014991131" target="_blank" rel="noopener noreferrer">
                                        <span id="socials-link-icon-4" aria-label="Socials Links Icon 4" class="fa-brands fa-facebook fa-2xl text-hover-clear-blue"></span>
                                    </a>
                                    <a id="socials-link-5" aria-label="Socials Link 5" title="Socials Links 5" class="space-infront" href="https://www.youtube.com/@LyKeyTech" target="_blank" rel="noopener noreferrer">
                                        <span id="socials-link-icon-5" aria-label="Socials Links Icon 5" class="fa-brands fa-youtube fa-2xl text-hover-lighter-purple"></span>
                                    </a>
                                    <a id="socials-link-6" aria-label="Socials Link 6" title="Socials Links 6" class="space-infront" href="https://www.tiktok.com/@lykeytech" target="_blank" rel="noopener noreferrer">
                                        <span id="socials-link-icon-6" aria-label="Socials Links Icon 6" class="fa-brands fa-tiktok fa-2xl text-hover-clear-blue"></span>
                                    </a>
                                </div>
                                <p id="socials-label" aria-label="Socials Label" class="flex flex-column space-above">
                                    <span>
                                        Created solely by John Keyes.
                                    </span>
                                    <span class="space-infront">
                                        &copy; 2025 LyKeyTech LLC
                                    </span>
                                </p>
                            {/snippet}
                        </SubTitle>
