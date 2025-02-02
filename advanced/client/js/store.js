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
        done: false,
      });
      this.data.props.todoList.push(newTodoItem);
    } catch (err) {
      console.log(err);
    }
  }

  async doneTodoItem(id, name, done) {
    const url = this.baseUrl + `/${id}`;
    try {
      const data = await fetch(url, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({ name, done }),
      }).then((response) => response.json());
      const newTodoItem = new Todo(this.data.element, {
        id: data.id,
        name: data.name,
        done: data.done,
      });
      const index = this.data.props.todoList.findIndex(
        (todo) => todo.props.id == newTodoItem.props.id
      );
      this.data.props.todoList.splice(index, 1, newTodoItem);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteTodoItem(id) {
    const url = this.baseUrl + `/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      const index = this.data.props.todoList.findIndex(
        (todo) => todo.props.id == id
      );
      this.data.props.todoList.splice(index, 1);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    this.data.render();
  }
}

export default new Store();
