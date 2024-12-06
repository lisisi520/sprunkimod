/**
 * @author Kevin
 * @description: 站点配置项
 * path config
 * @Date: 2024/11/11
 */

const baseSiteConfig = {
	name: "Sprunki Mod",
	description: "Sprunki Mod Music Game: Unleash Your Rhythm and Passion!",
	url: "https://sprunkimod.app",
	metadataBase: '/',
	keywords: ["sprunki mod maker,sprunki johnny mod, johnny sprunki mod, sprunkimod, sprunki creator mod,my sprunki mod,sprunki mod maker app, super sprunki brasil,sprunki mod game, sprunki maker mod,sprunki jobs mod,sprunki music game"],
	authors: [
		{
			name: "lisisi",
			url: "https://https://github.com/lisisi520",
		}
	],
	creator: '@lisisi',
	nextThemeColor: 'dark', // next-theme option: system | dark | light
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/logo.png",
	},
}

export const siteConfig = {
	...baseSiteConfig,
}
