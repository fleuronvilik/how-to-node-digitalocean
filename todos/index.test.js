const Todos = require('./index');
const assert = require('assert').strict;

describe("integration test", function() {
  it("should be able to add and complete TODOs", function() {
    let todos = new Todos();
    assert.strictEqual(todos.list().length, 0);

    todos.add("run code");
    assert.strictEqual(todos.list().length, 1);
    assert.deepStrictEqual(todos.list(), [{ title: "run code", completed: false }]);

    todos.add("test everything");
    assert.strictEqual(todos.list().length, 2);
    assert.deepStrictEqual(todos.list(), [
      { title: "run code", completed: false },
      { title: "test everything", completed: false }
    ]);

    todos.complete("run code");
    assert.deepStrictEqual(todos.list(), [
      { title: "run code", completed: true },
      { title: "test everything", completed: false }
    ]);
  });
});

