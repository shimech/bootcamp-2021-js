const baseUrl = "http://localhost:3000"

export const getTodoList = async () => {
    const url = `${baseUrl}/todo`
    try {
        const response = await fetch(url, {
            method: "GET"
        }).then(d => d.json())
        return response
    } catch (err) {
        console.log(err)
    }
}

export const addTodoItem = async name => {
    const url = `${baseUrl}/todo`
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name })
        }).then(d => d.json())
        return response
    } catch (err) {
        console.log(err)
    }
}

export const updateTodoItem = async (id, done) => {
    const url = `${baseUrl}/todo/${id}`
    try {
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ done })
        }).then(d => d.json())
        return response
    } catch (err) {
        console.log(err)
    }
}

export const deleteTodoItem = async id => {
    const url = `${baseUrl}/todo/${id}`
    try {
        const response = await fetch(url, {
            method: "DELETE"
        })
        return response
    } catch (err) {
        console.log(err)
    }
}
