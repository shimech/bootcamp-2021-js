class TodoList {
    constructor(parent, { todoList }) {
        this.parent = parent
        this.element = document.querySelector("ul.todos")
        this.props = { todoList }
    }

    render() {
        this.element.innerHTML = ""
        this.props.todoList.forEach(todo =>  todo.render())
    }
}

export default TodoList
