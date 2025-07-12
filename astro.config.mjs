// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			// pagefind: false,
			title: 'Dungeons & Dragons',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/unseen-ninja/'
				},
				{
					icon: 'information',
					label: 'Website',
					href: 'https://unseen.ninja/'
				}
			],
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
			plugins: [
				starlightThemeObsidian({
					backlinks: false,
					graph: false
				})
			],
		}),
	],
});
