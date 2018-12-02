<template>
	<main class="page page--bands">
		<div class="row center small-full medium-half large-14">
			<div class="column">
				<div class="image-container">
					<img src="~/assets/img/logos/sepiroth.png">
				</div>
				<section :style="`background-image: url(${sepiroth})`" class="header-image"/>
				<h2>Brutal / Old-School Death Metal from the Netherlands</h2>
				<p><strong>Sepiroth</strong> is an brutal old-school death metal band from Sliedrecht, the Netherlands. The band has been founded in 2003 by drummer Damiën and guitarist Chris. With the current stable line-up, Sepiroth wants to take their crushing death metal to the stages of world with more power and strength than ever before.</p>
				<p>Sepiroth makes riff-oriented death metal with many blastbeats. In the veins of Suffocation, Morbid Angel, Vomitory and Sinister. Sepiroth doesn’t want to label themselves with a single sub-genre, the songs differ from brutal death metal to technical and old-school death metal. Regarding the overall sound, Sepiroth aims to have a unique and tight sound. </p>
				<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsoniaanubisnusselder%2Fvideos%2F905340012992041%2F&amp;show_text=0&amp;width=560" style="border:none;overflow:hidden" scrolling="no" allowtransparency="true" allowfullscreen="true" width="560" height="315" frameborder="0"/>
				<h3>Social links</h3>
				<ul>
					<li>Facebook: <a href="https://www.facebook.com/sepirothnl/" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">https://www.facebook.com/sepirothnl/</a></li>
					<li>Instagram: <a href="https://www.instagram.com/sepirothdeathmetal/" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">https://www.instagram.com/sepirothdeathmetal/</a></li>
					<li>Bandcamp: <a href="https://sepiroth.bandcamp.com/" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">https://sepiroth.bandcamp.com/</a></li>
					<li>Spotify: <a href="https://open.spotify.com/artist/5NxUeDwyCm8aQGsDGZpI0p" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">https://open.spotify.com/artist/5NxUeDwyCm8aQGsDGZpI0p</a></li>
				</ul>
				<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsoniaanubisnusselder%2Fvideos%2F1166701403522566%2F&amp;show_text=0&amp;width=560" style="border:none;overflow:hidden" scrolling="no" allowtransparency="true" allowfullscreen="true" width="560" height="315" frameborder="0"/>
				<h3>Press articles/reviews</h3>
				<p>Some of the most recent (from this year 2018) reviews:
				<em>“And here came the great surprise of the evening for me. SEPIROTH started in flames on the stage with a very tough and energetic performance where all the hair on my body (except on my bald head) could bang along. Striking was of course the nicely looking bassist of the band, but let me talk only about the quality of performance and music that these youngsters roared on the boat. Everything fell into place at SEPIROTH. I will check them more often.”</em> - Graftalks</p>
				<p><em>“The first highlight of many is with Sepiroth, whom are working on a successor to Uninvolved from 2015. Thís is death metal as the Stonehenge audience likes to hear. Think of Death, Bolt Thrower, Sinister, Carcass and Aborted. Here the heads nod for the first time in large numbers. The acclaim multiplies compared to earlier bands. It is becoming busier on the site and there is more good news: it is now dry. The South-Holland group mainly focuses on the album Uninvolved from 2015. Everything seems to be right today: the sound and the performance are good, the audience is looking forward to it and the band members are motivated. Also the last year, only nineteen-year-old bassist Sonia 'Anubis' Nusselder shows herself well. Sepiroth makes a hugely positive impression.”</em> -  Metalfan</p>
				<p><em>“After this I was blown away by Sepiroth! Many of them were already at Stonehenge for a quarter to twelve for this band, it was full! It chopped and raged like crazy. They had a good sound and played fast and tight old school death metal. The singer also sings at Phlebotomized. This band is in my top ten favourite Dutch bands. I did not know Sepiroth yet, but suddenly they also get in the top ten. So hey, what a super band!”</em> - Live reviewer</p>
				<p><em>“...Today, at Stonehenge, the band is putting away a nice set again. Energised, with the dedication of bassist Sonia Nusselder and frontman Ben de Graaff that catch the eye. The tasty raw death metal is supported by the exceptionally good sound and that seems to make the difference with previous shows. Sepiroth brings one of the better shows of the last time and can look forward to sufficient interest for the stages.”</em> - Metal-Experience</p>
				
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
		class: 'sepiroth'
		}
	},
	data(){
		return {
			sepiroth: require('~/assets/img/bg/sepiroth.jpg')
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
