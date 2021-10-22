Vue.component("link-item", {
    name: "LinkItem",
    props: [
        "link",
        "title"
    ],
    template: `
        <li>
            <a v-bind:href="link" target="_blank" class="link-item_title">{{ title }}</a>
        </li>    
    `
});