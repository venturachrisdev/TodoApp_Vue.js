<template>

<div id="todo-list" class="col-sm-12">
	<div class="todo-item col-sm-12" v-for="todo in todos">
		<div class="col-sm-11 task-section" v-on:click="onClickTodo(todo)">
			<h2 class="todo-text" :class="{ done: todo.done }">{{todo.text}}</h2>
		</div>
		<div class="col-sm-1 delete-section" v-on:click="deleteTodo(todo)">
			<i class="glyphicon glyphicon-trash"></i>
		</div>
	</div>
</div>

</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {

  name: 'TodoList',
  created() {
  	this.getAllTodos();
  },
  computed: mapState(['todos']),
  methods: {
  	...mapActions(['getAllTodos', 'deleteTodo']),
  	onClickTodo(todo) {
  		this.$store.dispatch('setTodoDone', todo);
  	},
  	onDeleteTodo(todo) {
  	}
  }
};
</script>

<style lang="sass" scoped>

#todo-list
	width: 100%
	height: auto

.todo-item
	background-color: #fff
	border-radius: 4px
	box-shadow: 2px 2px 2px rgba(0, 0, 0, .04)
	margin-bottom: 10px
	cursor: pointer

h2
	margin: 20px 0px

h2.done
	text-decoration: line-through
	color: #ccc

.delete-section
	display: flex
	justify-content: center

.glyphicon
	color: #bbb
	font-size: 20px
	margin-top: 85%

.delete-section:hover .glyphicon
	color: #b20

.task-section
	border-right: 1px solid rgba(0,0,0,.05)

</style>
