var vue = new Vue({
    el: "#app",
    data: {
        linkList: linkList
    }
});

// If you host it locally and want to change json with vscode:
window.addEventListener("keydown", event => {
    if(event.key == "." && event.ctrlKey) {
        window.open("vscode://file/C:/Users/aweber/Documents/data/links.js", '_blank').focus();
    }
})