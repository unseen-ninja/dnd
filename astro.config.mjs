// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Dungeons & Dragons',
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/unseen-ninja' }],
			sidebar: [
				{
					label: 'Hofer',
					autogenerate: { directory: 'hofer' }
				},
				{
					label: 'Flex Q Madness',
					autogenerate: { directory: 'fqm' }
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
