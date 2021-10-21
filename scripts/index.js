var vue = new Vue({
    el: "#app",
    data: {
        message: "Your todo list:",
        todos: [
            { id: 0, text: "Learn Vue" },
            { id: 1, text: "Think about it" },
            { id: 2, text: "Decide what you use" },
        ]
    }
});
