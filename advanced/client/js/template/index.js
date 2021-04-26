import createTodoItemElement from "./todoItem.js"

export const showTodoList = todoList => {
    const todoListElement = document.querySelector("ul.todos")
    todoList.forEach(todoItem => {
        todoListElement.appendChild(createTodoItemElement(todoItem))
    })
}
