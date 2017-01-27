<template>
<div id="footer" class="footer text-center">
	<p class="text-white"> By <a :href="app_author_url">{{app_author}}</a>. Using <a :href="app_tech_url">{{app_tech}}</a></p>
</div>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			app_author: 'Christopher Ventura',
			app_author_url: 'http://github.com/christopherventura',
			app_tech: 'Vue.js',
			app_tech_url: 'http://vuejs.org'
		}
	}
}
</script>


<style lang="sass" scoped>
#footer a
	color: #fff
	font-weight: bold
</style>
