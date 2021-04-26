import Store from "./store.js"

const store = new Store()
await store.fetchTodoList()
store.data.render()
