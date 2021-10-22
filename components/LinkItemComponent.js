Vue.component("link-item", {
    name: "LinkItem",
    props: [
        "link",
        "title",
        "description"
    ],
    template: `
        <li>
            <a v-bind:href="link" v-bind:title="description" target="_blank" class="link-item_title">{{ title }}</a>
        </li>    
    `
});