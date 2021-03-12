class Todos {
  constructor() {
    this.todos = [];
  }

  list() {
    return [...this.todos];
  }

  add(title) {
    this.todos.push({ title, completed: false });
  }

  complete(title) {
    let todoFound = false;
    this.todos.forEach(todo => {
      if (todo.title === title) {
        todo.completed = true;
	todoFound = true;
	return;
      }
    });
    if (!todoFound) {
      throw new Error(`No TODO was found with the title: "${title}"`);
    }
  }
}

module.exports = Todos;

