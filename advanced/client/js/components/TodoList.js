class TodoList {
  constructor(parent, { todoList }) {
    this.parent = parent;
    this.element = document.querySelector("ul.todo-list");
    this.props = { todoList };
  }

  render() {
    this.element.innerHTML = "";
    this.props.todoList.forEach((todo) => todo.render());
  }
}

export default TodoList;
