<template>
  <div class="text-center">
	  <h1 class="display-4">
		  <img :src="require('~/assets/logo.png')" class="me-2 align-middle mb-2 logo" alt="solana" />
		  Welcome to <strong class="fw-bold">Solana</strong>.sh
	  </h1>
	  <h1 class="display-1">
		  <span @click="focusAmountChanger" id="amount-selector">
			  <span class="inner" @input="solanaAmountChange" contenteditable="true">1</span> SOL
		  </span> ≈
		  <span class="fw-bold">${{ dollarsAmount.toFixed(2) }}</span><sup class="text-primary daily-change">+{{ priceChange24h.toFixed(2) }}%</sup>
	  </h1>
	  <div class="d-flex buttons justify-content-center">
		  <a href="https://accounts.binance.cc/en/register?ref=57620695 " target="_blank" class="btn btn-lg d-flex align-items-center btn-primary rounded-pill text-white px-4 mt-4">
			  <i class="bx bxs-coin-stack me-2"></i>
			  Buy Solana ($SOL)
		  </a>
		  <button class="btn btn-lg d-flex align-items-center btn-secondary rounded-pill px-4 ms-lg-3 mt-4">
<!--			  <i class="bx bxs-binoculars me-2"></i>-->
<!--			  About Us-->
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
			amount: 1,
			dollarsAmount: 0,
			priceChange24h: 0
		}
	},
	mounted() {
		this.updatePrice();
		setInterval(() => this.updatePrice(), 30000);
	},
	methods: {
		focusAmountChanger: function () {
			let div = document.querySelector('#amount-selector .inner');
			div.focus();
		},
		solanaAmountChange: function(e) {
			this.amount = parseFloat(e.target.innerText);

			this.updatePrice();
		},
		updatePrice: function () {
			this.$axios.get('https://api.coingecko.com/api/v3/coins/solana').then(response => {
				this.amount = isNaN(this.amount) ? 1 : this.amount;
				this.dollarsAmount = this.amount * response.data.market_data.current_price.usd;
				this.priceChange24h = response.data.market_data.price_change_percentage_24h;
			})
		}
	}
}
</script>

<style>
h1 sup
{
	top: -0.7em;
	font-size: 0.5em;
}

#amount-selector:hover
{
	border-bottom: 3px dashed;
	cursor: pointer;
}

.logo
{
	//height: 45px;
	height: .8em;
}


@media (max-width: 992px) {
	.display-4 {
		font-size: 1.7rem;
	}

	.daily-change
	{
		display: none;
	}

	.buttons
	{
		flex-direction: column;
		align-items: center;
	}
}
</style>
