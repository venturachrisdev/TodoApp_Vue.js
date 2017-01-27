<template>
	<div id="add-todo-form">
		<form role="form" v-on:submit.prevent="onAddTodoSubmit" accept-charset="utf-8">
			<div class="col-sm-9">
				<div class="form-group">
					<input type="text" id="todo-text" class="form-control" autofocus="true" name="todo_text" placeholder="What do you have to do?" v-model="todo.text"></input>
				</div>
			</div>
			<div class="col-sm-3">
				<div class="form-group">
					<button type="submit" class="btn btn-primary btn-lg btn-block"><i class="glyphicon glyphicon-plus icon-off"></i>Add</button>
				</div>
			</div>

		</form>
	</div>
</template>

<script>
export default {
  name: 'TodoForm',
  data () {
    return {
    	todo: {
    		text: '',
    		done: false
    	}
    };
  },
  methods: {
  	onAddTodoSubmit() {
  		if (this.todo.text != '') {
	  		let todo = {
	  			text: this.todo.text,
	  			done: false
	  		};
	  		this.$store.dispatch('saveTodo', todo);
	  		this.todo.text = '';
  		}
  	}
  }
};
</script>

<style lang="sass" scoped>
#todo-text
	height: 48px
	font-size: 25px
</style>
