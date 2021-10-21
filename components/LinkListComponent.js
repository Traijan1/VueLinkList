Vue.component("link-list", {
    name: "LinkList",
    props: ["module"],
    template: `
        <ul>
            <link-item v-for="item in module.items"
                v-bind:title="item.title"
                v-bind:link="item.link"
                v-bind:key="item.link"
            ></link-item>
        </ul>
    `
});