import Store from "./store.js";

const store = new Store();

const initialize = async () => {
  await store.fetchTodoList();
  store.data.render();
};

await initialize();
