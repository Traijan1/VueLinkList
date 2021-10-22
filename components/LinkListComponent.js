Vue.component("link-list", {
    name: "LinkList",
    props: ["module"],
    template: `
        <ul class="link-list_list">
            <link-item v-for="item in module.items"
                v-bind:title="item.title"
                v-bind:link="item.link"
                v-bind:key="item.link"
            ></link-item>
        </ul>
    `
});