import store from "../store.js";

class TodoForm {
  constructor() {
    this.element = document.querySelector("form.todo-form");
  }

  mount() {
    this.element.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
}

export default TodoForm;
