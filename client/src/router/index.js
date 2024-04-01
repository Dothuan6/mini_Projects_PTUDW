import { createWebHistory, createRouter } from "vue-router";
import Book from "@/views/Book.vue";
import BookEdit from "@/views/BookEdit.vue";
const routes = [
  {
    path: "/",
    name: "book",
    component: Book,
  },
  {
    path: "/books/:id",
    name: "book.edit",
    component: () => import("@/views/BookEdit.vue"),
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/Error.vue"),
  },
  {
    path: "/docgia/register",
    name: "docgia.register",
    component: () => import("@/views/DocGiaRegister.vue"),
  },
  {
    path: "/docgia/login",
    name: "docgia.login",
    component: () => import("@/views/DocGiaLogin.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
