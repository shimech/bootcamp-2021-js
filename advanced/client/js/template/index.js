import { addTodoItem } from "../components/todoList.js"
import createTodoItemElement from "./todoItem.js"

export const showTodoList = todoList => {
    const todoListElement = document.querySelector("ul.todos")
    todoList.forEach(todoItem => {
        todoListElement.appendChild(createTodoItemElement(todoItem))
    })
}

export const addSubmitHandler = () => {
    const element = document.querySelector("form.todo-form")
    element.addEventListener("submit", async () => {
        const name = document.querySelector("input.todo-form__input").value
        await addTodoItem(name)
    })
}
