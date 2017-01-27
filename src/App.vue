<script>

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

export default {
	name: 'App',
	components: {
		TodoForm,
		TodoList,
		'myFooter': Footer
	},
	data () {
		return {
			app_title: 'TodoApp',
			app_description: 'Make your wish list for this year.',
			message: 'Hello World'
		};
	}
}
</script>


<template>
	<div>
		<div class="text-center">
			<h1 v-text="app_title" id="page-title"></h1>
			<p class="text-white page-description">{{app_description}}</p>
		</div>
		<div class="container" id="main-wrapper">
			<todo-form></todo-form>
			<todo-list></todo-list>
		</div>
		<myFooter></myFooter>
	</div>
</template>


<style lang="sass">
	@import "./assets/css/bootstrap.css"
	@import "./assets/css/style.css"

	#main-wrapper
		padding: 15px 0px
	.text-white
		color: #f1f1f1
		font-size: 16px
</style>
