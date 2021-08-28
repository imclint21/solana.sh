<template>
	<header class="navbar d-flex navbar-expand-lg navbar-dark">
		<div class="container">
			<NuxtLink to="/" class="navbar-brand w-25">
				<img :src="require('~/assets/logo.png')" class="me-2 align-middle" style="height: 21px;"  alt="solana" />
				<span class="fw-bold">Solana</span>.sh
				<sup><label class="badge bg-transparent text-primary">Beta</label></sup>
			</NuxtLink>
			<button class="navbar-toggler border-0 p-0" data-bs-toggle="collapse" type="button"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-center">
				<ul class="navbar-nav">
					<li class="nav-item">
						<NuxtLink to="/" exact-active-class="active" class="nav-link px-0 mx-lg-3 mx-0">
							<i class="bx bxs-dashboard align-middle me-1"></i>
							Overview
						</NuxtLink>
					</li>
					<li class="nav-item">
						<NuxtLink to="/api-docs" exact-active-class="active" class="nav-link px-0 mx-lg-3 mx-0">
							<i class="bx bxs-book-content align-middle me-1"></i>
							API Documentation
						</NuxtLink>
					</li>
					<li class="nav-item">
						<a href="https://github.com/clintnetwork/solana.sh" target="_blank" class="nav-link px-0 mx-lg-3 mx-0">
							<i class="bx bxl-github align-middle me-1"></i>
							GitHub
						</a>
					</li>
					<li class="nav-item">
						<NuxtLink to="/about" exact-active-class="active" class="nav-link px-0 mx-lg-3 mx-0">
							<i class="bx bxs-binoculars align-middle me-1"></i>
							About
						</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="w-25 text-end d-none d-lg-block">
				<a href="https://www.coinbase.com/join/clintm" target="_blank" class="btn btn-primary px-4 text-white rounded-pill">
<!--					<i class="bx bxs-paper-plane me-1"></i>-->
<!--					Get Started-->
					<i class="bx bxs-coin-stack me-2"></i>
					Buy Solana ($SOL)
				</a>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header"
}
</script>

<style scoped>
header
{
//box-shadow: inset 0 30px 30px #111b2b;
	padding-top: 2.1rem !important;
	padding-bottom: 1rem !important;
}

.nav-link {
	display: inline-block;
	position: relative;
	margin: 0 12px;
}
.nav-link:after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 2px;
	bottom: 0;
	left: 0;
	background-color: #2f495e;
	transform-origin: bottom right;
	transition: transform 0.25s ease-out;
}
.nav-link.active:after,
.nav-link:hover:after
{
	transform: scaleX(1);
	transform-origin: bottom left;
}

@media (max-width: 992px) {
	header {
		padding: 1rem 0.5rem !important;
	}
}
</style>
