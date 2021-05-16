export default {
	target: 'static',

	generate: {
		dir: 'public'
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Solana.sh | Real Time $SOL Price',
		htmlAttrs: {
			lang: 'en',
			class: 'h-100'
		},
		bodyAttrs: {
			class: 'd-flex flex-column h-100'
		},
		meta: [
			{ charset: 'utf-8' },
			{name: 'viewport', content: 'width=device-width, initial-scale=1; user-scalable=no'},
			{name: 'twitter:image:src', content: 'https://solana.sh/preview.png'},
			{name: 'twitter:card', content: 'summary_large_image'},
			{name: 'og:image', content: 'https://soalana.sh/preview.png'},
			{name: 'theme-color', content: '#dc1fff'},
			{name: 'msapplication-navbutton-color', content: '#dc1fff'},
			{name: 'apple-mobile-web-app-status-bar-style', content: '#dc1fff'},
			{name: 'apple-mobile-web-app-capable', content: 'yes'},
			{ hid: 'description', name: 'description', content: 'Real Time $SOL (Solana) Price | Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale today.' },
			{ hid: 'keywords', name: 'keywords', content: 'solana,sol,crypto,cryptocurrency,bitcoin,ethereum,sol price,sol price prediction,solana price,ethereum killer,dogecoin,doge' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css", rel: "stylesheet"}
		],
		script: [
			{src: 'https://www.googletagmanager.com/gtag/js?id=G-PP2T0SETVX', body: true}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/app.scss'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/bootstrap.js'
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'nuxt-animejs',
		'@nuxtjs/pwa',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/sitemap',
		'@nuxtjs/robots',
	],

	sitemap: {
		hostname: 'https://solana.sh'
	},

	pwa: {
		twitterCard: 'summary_large_image',
		twitterCreator: '@clint_network',
		author: 'Clint.Network',
		manifest: {
			name: 'Solana.sh',
			lang: 'en',
			background_color: "#dc1fff",
			theme_color: "#dc1fff",
			useWebmanifestExtension: false
		}
	},

	robots: {
		UserAgent: '*',
		Disallow: '/admin'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},

	loading: {
		color: '#dc1fff',
	}
}
