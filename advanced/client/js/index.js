import { getTodoList } from "./components/todoList.js"
import { addCheckHandler, addSubmitHandler, showTodoList } from "./template/index.js"

const main = async () => {
  const { todoList } = await getTodoList()
  showTodoList(todoList)
  addSubmitHandler()
  addCheckHandler()
};

await main();
