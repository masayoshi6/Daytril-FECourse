let new_todoList = [];

// ます、入力された値を取得するためのアロー関数
const getTodoList = () => {
  const todoList = document.getElementById("new-todo");
  const titleInput = document.getElementById("new-placedent");
  const limitInput = document.getElementById("lim");
  const listItem = todoList.value;
  const title = titleInput.value;
  const limit = limitInput.value;

  new_todoList.push({
    listItem: listItem,
    title: title,
    limit: limit,
  });
};

//次に、既存のTODOリストをクリアし、新たにtodo一覧を表示するためのアロー関数を作成します。
const newTodoList = () => {
  while (document.getElementById("todo-list").firstChild) {
    document
      .getElementById("todo-list")
      .removeChild(document.getElementById("todo-list").firstChild);
  }

  new_todoList.forEach((todo) => {
    const todoListElement = document.createElement("td");
    todoListElement.textContent = todo.listItem;
    document.getElementById("todo-list").appendChild(todoListElement);

    const titleElement = document.createElement("td");
    titleElement.textContent = todo.title;
    document.getElementById("todo-list").appendChild(titleElement);

    const limitElement = document.createElement("td");
    limitElement.textContent = todo.limit;
    document.getElementById("todo-list").appendChild(limitElement);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", () => {
      const index = new_todoList.indexOf(todo);
      if (index > -1) {
        new_todoList.splice(index, 1);
        newTodoList();
      }
    });
    const deleteElement = document.createElement("td");
    deleteElement.appendChild(deleteButton);
    document.getElementById("todo-list").appendChild(deleteElement);

    const trElement = document.createElement("tr");
    trElement.appendChild(todoListElement);
    trElement.appendChild(titleElement);
    trElement.appendChild(limitElement);
    trElement.appendChild(deleteElement);
    document.getElementById("todo-list").appendChild(trElement);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const registerButton = document.getElementById("register");
  registerButton.addEventListener("click", () => {
    // TODOリストを取得
    getTodoList();

    // 既存のTODOリストをクリアし、新たにTODOリストを表示
    newTodoList();

    const filterInput = document.getElementById("filter");
    filterInput.addEventListener("input", () => {
      const filterValue = filterInput.value.toLowerCase();
      const filteredTodoList = new_todoList.filter((todo) =>
        todo.listItem.toLowerCase().includes(filterValue)
      );

      // フィルタリングされたTODOリストを表示
      while (document.getElementById("todo-list").firstChild) {
        document
          .getElementById("todo-list")
          .removeChild(document.getElementById("todo-list").firstChild);
      }

      filteredTodoList.forEach((todo) => {
        const todoListElement = document.createElement("td");
        todoListElement.textContent = todo.listItem;
        document.getElementById("todo-list").appendChild(todoListElement);

        const titleElement = document.createElement("td");
        titleElement.textContent = todo.title;
        document.getElementById("todo-list").appendChild(titleElement);

        const limitElement = document.createElement("td");
        limitElement.textContent = todo.limit;
        document.getElementById("todo-list").appendChild(limitElement);

        const trElement = document.createElement("tr");
        trElement.appendChild(todoListElement);
        trElement.appendChild(titleElement);
        trElement.appendChild(limitElement);
        document.getElementById("todo-list").appendChild(trElement);
      });
    });
  });
});
