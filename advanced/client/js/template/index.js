import { addTodoItem, deleteTodoItem, updateTodoItem } from "../components/todoList.js"
import createTodoItemElement from "./todoItem.js"

export const showTodoList = todoList => {
    const todoListElement = document.querySelector("ul.todos")
    todoList.forEach(todoItem => {
        todoListElement.appendChild(createTodoItemElement(todoItem))
    })
}

export const addSubmitHandler = () => {
    const element = document.querySelector("form.todo-form")
    element.addEventListener("submit", async event => {
        event.preventDefault()
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

export const addDeleteHandler = () => {
    const elements = document.querySelectorAll("div.todo-remove-button")
    elements.forEach(element => element.addEventListener("click", async () => {
        const id = element.getAttribute("data-todo-id")
        await deleteTodoItem(id)
        element.parentNode.remove()
    }))
}
