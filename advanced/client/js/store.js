import Todo from "./components/Todo.js";
import TodoList from "./components/TodoList.js";

class Store {
  constructor() {
    this.baseUrl = "http://localhost:3000/todo";
    this.data = new TodoList({ todoList: [] });
  }

  async fetchTodoList() {
    const url = this.baseUrl;
    try {
      const response = await fetch(url, {
        method: "GET",
      }).then((d) => d.json());
      this.data.props.todoList = response.todoList.map((todo) => {
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

  render() {
    this.data.render();
  }
}

export default new Store();
