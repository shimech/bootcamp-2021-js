import store from "./store.js";
import TodoForm from "./components/TodoForm.js";

const todoForm = new TodoForm();
todoForm.mount();

const initialize = async () => {
  await store.fetchTodoList();
  store.render();
};

await initialize();
