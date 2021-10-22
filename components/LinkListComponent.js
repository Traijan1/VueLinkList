Vue.component("link-list", {
    name: "LinkList",
    props: ["module"],
    template: `
        <div class="link-list_container">
            <h2 class="link-list_h2">{{module.name}}</h2>
            <ul class="link-list_list">
                <link-item v-for="item in module.items"
                    v-bind:title="item.title"
                    v-bind:link="item.link"
                    v-bind:description="item.description ? item.description : null"
                    v-bind:key="item.link"
                ></link-item>
            </ul>
        </div>
    `
});