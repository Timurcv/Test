import Main from "@/views/Main.vue"
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "@/views/UserPage.vue";
import About from "@/views/About.vue";
import PostsIdPage from "@/views/PostIdPage.vue"
import PostPageWithStore from "@/views/PostPageWithStore.vue";
import PostPageCompositionApi from "@/views/PostPageCompositionApi.vue";
const router = createRouter({
    routes: [
        {
            path: '/',
            component: Main,
            name: "main"
        },
        {
            path: '/posts',
            component: UserPage,
            name: "userpage"
        },
        {
            path: '/about',
            component: About,
            name: "about"
        },
        {
            path: '/posts/:id',
            component: PostsIdPage,
            name: "postsidpage"
        },
        {
            path: '/store',
            component: PostPageWithStore,
        },
        {
            path: '/composition',
            component: PostPageCompositionApi,
        }
    ],
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router;