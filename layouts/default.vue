<template>
	<div id="app" class="d-flex flex-column vh-100">
		<Ads />
		<div class="overlay"></div>
		<Rain v-if="isRaining" />
		<div v-else class="pyro">
			<div class="before"></div>
			<div class="after"></div>
		</div>
		<Header />
		<main role="main" class="d-flex justify-content-center align-items-center h-100 pb-5">
			<Nuxt />
		</main>
		<Footer />
	</div>
</template>

<script>
export default {
	data() {
		return {
			isRaining: false
		}
	},
	mounted() {
		if(process.client) {
			this.$axios.get('https://api.coingecko.com/api/v3/coins/solana').then(response => {
				this.isRaining = response.data.market_data.price_change_percentage_24h <= 0;
			});

			// Collapsible menu
			let bootstrap = require('bootstrap');
			const navLinks = document.querySelectorAll('.nav-item')
			const menuToggle = document.getElementById('navbarSupportedContent')
			const bsCollapse = new bootstrap.Collapse(menuToggle, {
				toggle: false
			})
			navLinks.forEach((l) => {
				l.addEventListener('click', () => { bsCollapse.toggle() })
			});

			// Google
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'G-PP2T0SETVX');

			// Hotjar
			(function (h, o, t, j, a, r) {
				h.hj = h.hj || function () {
					(h.hj.q = h.hj.q || []).push(arguments)
				};
				h._hjSettings = {hjid: 2402974, hjsv: 6};
				a = o.getElementsByTagName('head')[0];
				r = o.createElement('script');
				r.async = 1;
				r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
				a.appendChild(r);
			})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
		}
	}
}
</script>

<style>
#app
{
	box-shadow: inset 0 0 210px rgba(0,0,0,0.1);
	height: 100vh;
}

.pyro
{
	//display: none;
	opacity: .7;
}

.overlay
{
	//box-shadow: inset 0 0 210px rgba(0,0,0,0.71);
	//background-image: url("https://i.imgur.com/ml6im0o.png");
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	filter: blur(21px) brightness(100%);
}

canvas
{
	z-index: -1;
}

main {
	display: flex;
	align-items: center;
}
</style>
