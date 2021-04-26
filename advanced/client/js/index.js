import { getTodoList } from "./components/todoList.js"
import { addCheckHandler, addDeleteHandler, addSubmitHandler, showTodoList } from "./template/index.js"

const main = async () => {
  const { todoList } = await getTodoList()
  showTodoList(todoList)
  addSubmitHandler()
  addCheckHandler()
  addDeleteHandler()
};

await main();
