<template>
	<main class="page page--about">
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
		// heading,
	},
	head: {
		bodyAttrs: {
		class: 'about'
		}
	},
	data(){
		return {
		}
	},
	asyncData({ params, error }) {
		return axios.get(apiDomain + '/wp/v2/pages/6').then(async result => {
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

.header-image {
	background-position: top center;
}

</style>