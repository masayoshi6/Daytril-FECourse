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

//次に、既存のTODOリストをクリアするたえのアロー関数を作成します。これにより、新しいTODOリストを表示する前に、古いTODOリストが削除されます。
const clearTodoList = () => {
  while (document.getElementById("todo-list").firstChild) {
    document
      .getElementById("todo-list")
      .removeChild(document.getElementById("todo-list").firstChild);
  }
};

// 最後に、新しいTODOリストを表示するためのアロー関数を追加します。
const displayTodoList = () => {
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

    const trElement = document.createElement("tr");
    trElement.appendChild(todoListElement);
    trElement.appendChild(titleElement);
    trElement.appendChild(limitElement);
    document.getElementById("todo-list").appendChild(trElement);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const registerButton = document.getElementById("register");
  registerButton.addEventListener("click", () => {
    // TODOリストを取得
    getTodoList();

    // 既存のTODOリストをクリア
    clearTodoList();

    // 新しいTODOリストを表示
    displayTodoList();
  });
});
