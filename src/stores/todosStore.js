const FETCH_TODOS = 'FETCH_TODOS';
const SAVE_TODO = 'SAVE_TODO';
const SET_TODO_DONE = 'SET_TODO_DONE';
const DELETE_TODO = 'DELETE_TODO';
const TODOS_STORAGE = 'todos_todoapp';

const state = {
	todos: [
		{ text: 'Default Task', done: false }
	]
};
const mutations = {
	FETCH_TODOS (state) {
		let _todos = window.localStorage.getItem(TODOS_STORAGE);
			state.todos = JSON.parse(_todos);
			return state.todos;
	},
	SAVE_TODO (state, todo) {
		let todos = state.todos;
		todos.unshift(todo);
		window.localStorage.setItem(TODOS_STORAGE, JSON.stringify(todos));
	},
	SET_TODO_DONE (state, todo) {
		state.todos.forEach(_todo => {
			if (_todo == todo) {
				_todo.done = !_todo.done;
			}
		});
		window.localStorage.setItem(TODOS_STORAGE, JSON.stringify(state.todos));
	},
	DELETE_TODO (state, todo) {
		let todos = state.todos;
		todos.forEach((_todo, id) => {
			if (_todo == todo) {
				state.todos.splice(id, 1);
			}
		});
		window.localStorage.setItem(TODOS_STORAGE, JSON.stringify(state.todos));
	}
};

const getters = {
	doneTodos(state) {
		return state.todos.filter(todo => todo.done);
	}
};

const actions = {
	getAllTodos:  ({commit}) => {
		if (window.localStorage.getItem(TODOS_STORAGE) != null) {
			commit(FETCH_TODOS);
		}
	},
	saveTodo({commit}, todo) {
		if (todo != null) {
			commit(SAVE_TODO, todo);
		}
	},
	setTodoDone({commit}, todo) {
		if (todo != null) {
			commit(SET_TODO_DONE, todo);
		}
	},
	deleteTodo({commit}, todo) {
		if (todo != null) {
			commit(DELETE_TODO, todo);
		}
	}
};

export default {
	state,
	mutations,
	getters,
	actions
};
