import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	preprocessorOptions: {
        scss: {                                 
            additionalData: `
            @use '$lib/styles/app' as *;
        	`,
        },
	}
	
});
