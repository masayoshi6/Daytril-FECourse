let new_todoList = [];

document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.getElementById("register");
    registerButton.addEventListener("click", () => {
        const todoList = document.getElementById("new-todo");
        const titleInput = document.getElementById("new-placedent");
        const limitInput = document.getElementById("lim");
        const listItem = todoList.value;
        const title = titleInput.value;
        const limit = limitInput.value;

        const todoObject = {
            listItem: listItem,
            title: title,
            limit: limit
        };

        new_todoList.push(todoObject);
        console.log(new_todoList);

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
});
});