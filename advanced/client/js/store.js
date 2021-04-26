import Todo from "./models/todo.js"
import TodoList from "./models/todoList.js"

class Store {
    constructor () {
        this.baseUrl = "http://localhost:3000/todo"
    }

    async fetchTodoList() {
        const url = this.baseUrl
        try {
            const response = await fetch(url, {
                method: "GET"
            }).then(d => d.json())
            this.data = new TodoList(document, [])
            const todoList = response.todoList.forEach(todo => {
                const temp = new Todo(this.data.element, { id: todo.id, name: todo.name, done: todo.done })
                return temp
            })
            console.log(todoList)
            // this.data.props = todoList
        } catch (err) {
            console.log(err)
        }
    }
}

export default Store
