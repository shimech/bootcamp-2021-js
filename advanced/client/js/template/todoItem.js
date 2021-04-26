const createTodoItemElement = todoItem => {
    const element = document.createElement("li")
    element.setAttribute("class", "todo-item")

    const toggleElement = document.createElement("label")
    toggleElement.setAttribute("class", "todo-toggle__container")

    const inputElement = document.createElement("input")
    inputElement.setAttribute("data-todo-id", todoItem.id)
    inputElement.setAttribute("type", "checkbox")
    inputElement.setAttribute("class", "todo-toggle")
    inputElement.checked = todoItem.done
    const spanElement = document.createElement("span")
    spanElement.setAttribute("class", "todo-toggle__checkmark")

    toggleElement.appendChild(inputElement)
    toggleElement.appendChild(spanElement)

    const nameElement = document.createElement("div")
    nameElement.setAttribute("class", "todo-name")
    nameElement.innerText = todoItem.name

    const removeButtonElement = document.createElement("div")
    removeButtonElement.setAttribute("data-todo-id", todoItem.id)
    removeButtonElement.setAttribute("class", "todo-remove-button")
    removeButtonElement.innerText = "x"

    element.appendChild(toggleElement)
    element.appendChild(nameElement)
    element.appendChild(removeButtonElement)

    return element
}

export default createTodoItemElement
