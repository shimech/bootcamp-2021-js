import getTodoList from "./components/todoList.js"
import { showTodoList } from "./template/index.js"

const main = async () => {
  const { todoList } = await getTodoList()
  showTodoList(todoList)
};

await main();
