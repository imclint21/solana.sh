<template>
  <div class="text-center">
	  <h1 class="display-4">
		  <img src="https://solana.com/branding/logomark/logomark-gradient.svg" class="me-2 align-middle mb-2" style="height: 45px;"  alt="solana" />
		  Welcome to <strong class="fw-bold">Solana</strong>.sh
	  </h1>
	  <h1 class="display-1">
		  <span class="amount-selector">1 SOL</span> ≈ <span class="fw-bold">${{ solana.market_data.current_price.usd }}</span><sup class="text-primary">+{{ solana.market_data.price_change_percentage_24h.toFixed(2) }}%</sup>
	  </h1>
	  <div class="d-flex justify-content-center">
		  <button class="btn btn-lg d-flex align-items-center btn-primary rounded-pill text-white px-4 mt-4">
			  <i class="bx bxs-paper-plane me-2"></i>
			  Get Started
		  </button>
		  <button class="btn btn-lg d-flex align-items-center btn-secondary rounded-pill px-4 ms-3 mt-4">
			  <i class="bx bxs-book-content me-2"></i>
			  API Documentation
		  </button>
	  </div>
  </div>
</template>

<script>
export default {
	name: "index",
	data() {
		return {
			solana: {
				market_data: {
					current_price:{
						usd: 0
					},
					price_change_percentage_24h: 0
				}
			}
		}
	},
	mounted() {
		this.$axios.get('https://api.coingecko.com/api/v3/coins/solana').then(response => {
			this.solana = response.data;
		})
	}
}
</script>

<style>
h1 sup
{
	top: -0.7em;
	font-size: 0.5em;
}

.amount-selector:hover
{
	border-bottom: 3px dashed;
	cursor: pointer;
}
</style>
