const getTodoList = async () => {
    const url = "http://localhost:3000/todo"
    try {
      const response = await fetch(url, {
        method: "GET"
      })
      .then(d => d.json())
      return response
    } catch (err) {
      console.log(err)
    }
  }

export default getTodoList;
