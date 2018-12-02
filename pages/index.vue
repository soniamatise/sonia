<template>
	<main class="page page--home">
		<div class="row center small-full medium-half large-6">
			<div class="column text-centered">
				<p>Guitarist/bassist from the Netherlands.</p>
				<div class="button-container">
					<nuxt-link class="button" to="/about">
						Read more
					</nuxt-link>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
// import slider from '~/components/animations/slider.vue';
export default {
	components: {
		// slider
	},
	head: {
		bodyAttrs: {
			class: 'home'
		}
	},
};
</script>

<style lang="scss">
@import '~tools';

</style>
