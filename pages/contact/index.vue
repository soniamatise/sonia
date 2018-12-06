<template>
	<main class="page page--contact">
		<div class="row center small-full medium-half large-14">
			<div class="column">
				<h1>{{ pageTitle }}</h1>
				<div v-html="pageContent" />
			</div>
		</div>
	</main>

</template>

<script>
const axios = require('axios');
const apiDomain = process.env.apiDomain;

export default {
	components: {
		// henrisNuxt
	},
	head: {
		bodyAttrs: {
		class: 'contact'
		}
	},
	asyncData({ params, error }) {
		return axios.get(apiDomain + '/wp/v2/pages/16').then(async result => {
			let pageData = result.data;
			return {
				pageTitle: pageData.title.rendered,
				pageContent: pageData.content.rendered,
			};
		});
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
</style>
