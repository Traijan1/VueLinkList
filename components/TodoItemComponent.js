Vue.component("todo-item", {
    name: "TodoItem",
    props: ["todo"],
    template: "<li>{{todo.text}}</li>"
});