import store from "../store.js";

class TodoForm {
  constructor() {
    this.element = document.querySelector("form.todo-form");
  }

  mount() {
    this.element.addEventListener("submit", (event) => {
      event.preventDefault();
      store.addTodoItem(this.element.name.value).then(() => store.render());
      this.element.name.value = "";
    });
  }
}

export default TodoForm;
