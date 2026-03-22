let new_todoList = [];

// ます、入力された値を取得するためのアロー関数
const getTodoList = () => {
  const todoList = document.getElementById("new-todo");
  const titleInput = document.getElementById("new-placedent");
  const limitInput = document.getElementById("lim");
  const listItem = todoList.value.trim();
  const title = titleInput.value.trim();
  const limit = limitInput.value.trim();

  if (listItem === "" || title === "" || limit === "") {
    alert("TODOリスト、タイトル、期限を入力してください。");
    return;
  }

  new_todoList.push({
    listItem: listItem,
    title: title,
    limit: limit,
  });
  todoList.value = "";
  titleInput.value = "";
  limitInput.value = "";
  todoList.focus();
};

// 現在のフィルター値で絞り込んで描画する
const applyFilter = () => {
  const filterValue = document.getElementById("filter").value.toLowerCase();
  const filteredList = new_todoList.filter((todo) =>
    todo.listItem.toLowerCase().includes(filterValue)
  );
  renderTodoList(filteredList);
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("register").addEventListener("click", () => {
    getTodoList();

    applyFilter(); // 登録時もフィルターを考慮して描画
  });

  document.getElementById("filter").addEventListener("input", () => {
    applyFilter();
  });
});

// 描画処理を1か所にまとめる
const renderTodoList = (list) => {
  const tbody = document.getElementById("todo-list");
  while (tbody.firstChild) tbody.removeChild(tbody.firstChild);

  list.forEach((todo) => {
    const trElement = document.createElement("tr");

    const todoListElement = document.createElement("td");
    todoListElement.textContent = todo.listItem;

    const titleElement = document.createElement("td");
    titleElement.textContent = todo.title;

    const limitElement = document.createElement("td");
    limitElement.textContent = todo.limit;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", () => {
      const index = new_todoList.indexOf(todo);
      if (index > -1) {
        new_todoList.splice(index, 1);
        applyFilter(); // ← ここが修正のポイント！
      }
    });

    const deleteElement = document.createElement("td");
    deleteElement.appendChild(deleteButton);

    trElement.appendChild(todoListElement);
    trElement.appendChild(titleElement);
    trElement.appendChild(limitElement);
    trElement.appendChild(deleteElement);
    tbody.appendChild(trElement);
  });
};
