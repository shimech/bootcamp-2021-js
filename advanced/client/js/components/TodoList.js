class TodoList {
  constructor({ todoList }) {
    this.parent = document.querySelector("div.todo-list__wrapper");
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "todo-list")
    this.props = { todoList };
  }

  render() {
    this.element.innerHTML = "";
    this.props.todoList.forEach((todo) => todo.render());
    this.parent.appendChild(this.element)
  }
}

export default TodoList;
