import Todo from "./components/Todo.js";
import TodoList from "./components/TodoList.js";

class Store {
  constructor() {
    this.baseUrl = "http://localhost:3000/todo";
    this.headers = {
      "Content-Type": "application/json",
    };
    this.data = new TodoList({ todoList: [] });
  }

  async fetchTodoList() {
    const url = this.baseUrl;
    try {
      const data = await fetch(url, {
        method: "GET",
      }).then((response) => response.json());
      this.data.props.todoList = data.todoList.map((todo) => {
        return new Todo(this.data.element, {
          id: todo.id,
          name: todo.name,
          done: todo.done,
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  async addTodoItem(name) {
    const url = this.baseUrl;
    try {
      const data = await fetch(url, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({ name }),
      }).then((response) => response.json());
      const newTodoItem = new Todo(this.data.element, {
        id: data.id,
        name: data.name,
        done: data.false,
      });
      this.data.props.todoList.push(newTodoItem);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    this.data.render();
  }
}

export default new Store();
