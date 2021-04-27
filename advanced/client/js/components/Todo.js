class Todo {
  constructor(parent, { id, name, done }) {
    this.parent = parent;
    this.props = { id, name, done };
  }

  render() {
    const template = document.querySelector("template#todo-item");
    const clone = template.content.cloneNode(true);

    const inputElement = clone.querySelector("input.todo-toggle");
    inputElement.setAttribute("data-todo-id", this.props.id);
    inputElement.checked = this.props.done;
    const nameElement = clone.querySelector("div.todo-name");
    nameElement.innerText = this.props.name;
    const removeElement = clone.querySelector("todo-remove-button");
    removeElement.setAttribute("data-todo-id", this.props.id);

    parent.appendChild(clone);
  }
}

export default Todo;
