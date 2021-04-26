import getTodoList from "./components/todoList.js"
import createTodoItemElement from "./template/todoItem.js"

const main = async () => {
  const { todoList } = await getTodoList()
  const todoListElement = document.querySelector("ul.todos")
  todoListElement.innerHTML = ""
  todoList.forEach(todoItem => {
    todoListElement.appendChild(createTodoItemElement(todoItem))
  })
};

await main();
