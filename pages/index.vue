<template>
  <div class="text-center">
	  <h1 class="display-4">
		  <img src="https://solana.com/branding/logomark/logomark-gradient.svg" class="me-2 align-middle mb-2" style="height: 45px;"  alt="solana" />
		  Welcome to <strong class="fw-bold">Solana</strong>.sh
	  </h1>
	  <h1 class="display-1">
		  <span @click="focusAmountChanger" id="amount-selector">
			  <span class="inner" @input="solanaAmountChange" contenteditable="true">1</span> SOL
		  </span> ≈
		  <span class="fw-bold">${{ dollarsAmount.toFixed(2) }}</span><sup class="text-primary">+{{ priceChange24h.toFixed(2) }}%</sup>
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
</style>
