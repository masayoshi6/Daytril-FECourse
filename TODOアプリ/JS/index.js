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
        });
});

