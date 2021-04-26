import { getTodoList } from "./components/todoList.js"
import { addSubmitHandler, showTodoList } from "./template/index.js"

const main = async () => {
  const { todoList } = await getTodoList()
  showTodoList(todoList)
  addSubmitHandler()
};

await main();
