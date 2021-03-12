const fs = require('fs').promises;

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
    if (this.todos.length === 0) {
      throw new Error("You have no TODOs stored. Why don't you add one first?");
    }

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

  saveToFile() {
    let fileContents = "Title,Completed\n";
    this.todos.forEach(todo => {
      fileContents += `${todo.title},${todo.completed}\n`;
    });

    return fs.writeFile('todos.csv', fileContents);
  }
}

module.exports = Todos;

