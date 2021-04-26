import { addTodoItem, updateTodoItem } from "../components/todoList.js"
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

export const addCheckHandler = () => {
    const elements = document.querySelectorAll("input.todo-toggle")
    elements.forEach(element => element.addEventListener("click", async () => {
        const id = element.getAttribute("data-todo-id")
        const done = element.checked
        await updateTodoItem(id, done)
    }))
}
