<template>
	<main class="page page--bands">
		<div class="row center small-full medium-half large-14">
			<div class="column">
				<h1>Bands</h1>
				<div class="bands">
					<div :style="`background-image: url(${burningwitches})`" class="bands__item">
						<nuxt-link class="bands__link" to="/bands/burning-witches">
							<div class="bands__name">
								<img src="~/assets/img/logos/burningwitches.png">
								<p>Heavy/Powermetal from Switserland</p>
							</div>
						</nuxt-link>
					</div>
					<div :style="`background-image: url(${sepiroth})`" class="bands__item">
						<nuxt-link class="bands__link" to="/bands/sepiroth">
							<div class="bands__name">
								<img src="~/assets/img/logos/sepiroth.png">
								<p>Deathmetal from the Netherlands</p>
							</div>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</main>

</template>

<script>
// import henrisNuxt from '~/components/henris-nuxt.vue';
export default {
	components: {
		// henrisNuxt
	},
	data(){
		return {
			sepiroth: require('~/assets/img/bg/sepiroth.jpg'),
			burningwitches: require('~/assets/img/bg/burningwitches2.jpg')
		}
	},
};
</script>

<style lang="scss">
@import '~tools';

.page {
	// general page styles
	&--home {
		// specific home styles
	}
}

.bands  {
	display: flex;
	flex-direction: column;
	&__item {
		width: 100%;
		height: 400px;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	&__link{
		text-decoration: none;
	}

	&__name {
		background-color: rgba(0,0,0,.6);
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: flex-end;
		transition: background-color 400ms ease;

		img {
			width: 25%;
		}
		p {
			color: color(White);
			font-weight: 700;
			padding-bottom: grid(1);
		}
		&:hover {
			background-color: rgba(0,0,0,.3);
		}
	}
}
</style>
