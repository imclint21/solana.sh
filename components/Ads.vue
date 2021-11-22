<template>
	<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5;">
		<div id="popup" class="toast fade show border-0 rounded-3" role="alert">
			<a href="https://parasol.finance/" target="_blank" class="toast-body px-3 py-3 d-flex">
				<img src="https://parasol.finance/icon.png" class="ads me-3 p-2" alt="parasol.finance ads">
				<div>
					<h6 class="fw-normal">Parasol.Finance Presale</h6>
					<p class="mb-0 small">The First Community Governed IDO Platform on Solana. Join Presale &rarr;</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Ads"
}
</script>

<style scoped>
#popup
{
	box-shadow: 0 0 2.1rem rgba(0, 0, 0, .07);
}

a.toast-body
{
	text-decoration: none;
	color: inherit;
}

.ads
{
	max-height: 70px;
}
</style>
