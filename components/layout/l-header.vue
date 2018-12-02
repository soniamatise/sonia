<template>
	<header id="header" class="header">
		<div class="row center small-full medium-half large-14">
			<div class="column">
				<div class="header__logo">
					<nuxt-link class="header__logo-link" to="/">
						<div :style="`background-image: url(${logo})`" class="logo"/>
					</nuxt-link>
				</div>
				<nav class="main-nav">
					<ul class="main-nav__list">
						<li class="main-nav__item">
							<nuxt-link to="/about" class="main-nav__link">
								<span class="main-nav__text">About</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item">
							<nuxt-link to="/bands" class="main-nav__link">
								<span class="main-nav__text">Bands</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item">
							<nuxt-link to="/music-video" class="main-nav__link">
								<span class="main-nav__text">Music/Video</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item">
							<nuxt-link to="/tour" class="main-nav__link">
								<span class="main-nav__text">Tour</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item">
							<nuxt-link to="/contact" class="main-nav__link">
								<span class="main-nav__text">Contact</span>
							</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>	
	</header>
</template>

<script>
export default {
	data(){
		return {
			logo: require('~/assets/img/sonialogo.png'),
		}
	},
};
</script>

<style lang="scss">
@import '~tools';

.header {
	position: relative;
	z-index: 3;
	.logo {
		height: 100px;
		width: 100%;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: contain;
		margin: 30px 0 20px;
	}
	.main-nav {
		&__list {
			display: flex;
			justify-content: space-between;
		}
		&__item {

		}
		&__link {
			position: relative;
			text-decoration: none;
			&:before {
				content: '';
				width: 0%;
				background-color: color(Blue);
				transition: width 300ms ease;
				height: 2px;
				position: absolute;
				bottom: 0;
				left:0;
			}
			&:hover {
				&:before {
					width: 100%;
				}
			}
			&.nuxt-link-active {
				&:before {
				width: 100%;
				}
			}
		}
		&__text {
			font-family: Unifrakturcook, serif;
			font-size: 30px !important;
		}
	}
}
</style>
