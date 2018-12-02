<template>
	<main class="page page--musicvideo">
		<div class="row center small-full medium-half large-14">
			<div class="column">
				<h1>Music/Video</h1>
				<p>Video's take some seconds to load on this page.</p>
				<iframe src="https://www.youtube.com/embed/1OCmwMFKDlE" allow="autoplay; encrypted-media" allowfullscreen="" width="560" height="315" frameborder="0"/>
				<iframe src="https://www.youtube.com/embed/840vcVzth-0" allow="autoplay; encrypted-media" allowfullscreen="" width="560" height="315" frameborder="0"/>
				<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsoniaanubisnusselder%2Fvideos%2F905340012992041%2F&amp;show_text=0&amp;width=560" style="border:none;overflow:hidden" scrolling="no" allowtransparency="true" allowfullscreen="true" width="560" height="315" frameborder="0"/>
				<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsoniaanubisnusselder%2Fvideos%2F813837692142274%2F&amp;show_text=0&amp;width=560" style="border:none;overflow:hidden" scrolling="no" allowtransparency="true" allowfullscreen="true" width="560" height="373" frameborder="0"/>
				<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsoniaanubisnusselder%2Fvideos%2F986834608175914%2F&amp;show_text=0&amp;width=560" style="border:none;overflow:hidden" scrolling="no" allowtransparency="true" allowfullscreen="true" width="560" height="315" frameborder="0"/>
				<iframe src="https://www.youtube.com/embed/JGurTRoLwuY" allow="autoplay; encrypted-media" allowfullscreen="" width="560" height="315" frameborder="0"/>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/C6-dx0cK96M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<h2>Guitars on:</h2>
				<p><img alt="Burning Witches - Hexenhammer" src="/user/pages/03.music-video/burningwitcheshexenhammercd.jpg"></p>
				<h2>Bass on:</h2>
				<p><img alt="Ecocide - Where the Stars Align" src="/user/pages/03.music-video/a3432297683_16.jpg"></p>
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
	head: {
		bodyAttrs: {
		class: 'music-video'
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
</style>
