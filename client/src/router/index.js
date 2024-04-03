import { createWebHistory, createRouter } from "vue-router";
import Book from "@/views/Book.vue";
const routes = [
  {
    path: "/",
    name: "book",
    component: Book,
  },
  {
    path: "/book/:id",
    name: "book.edit",
    component: () => import("@/views/BookEdit.vue"),
    props: true,
  },
  {
    path: "/book/add",
    name: "book.add",
    component: () => import("@/views/BookAdd.vue"),
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/Error.vue"),
  },
  {
    path: "/nhanvien/login",
    name: "nhanvien.login",
    component: () => import("@/views/NhanVienLog.vue"),
  },
  // {
  //   path: "/docgia/login",
  //   name: "docgia.login",
  //   component: () => import("@/views/DocGiaLogin.vue"),
  // },
  {
    path: "/nhanvien/register",
    name: "nhanvien.register",
    component: () => import("@/views/NhanVienReg.vue"),
    props: true,
  },
  {
    path: "/docgia",
    name: "showdocgia",
    component: () => import("@/views/ShowDocGia.vue"),
    // props: true,
  },
  {
    path: "/nxb",
    name: "shownxb",
    component: () => import("@/views/ShowNhaXuatBan.vue"),
    // props: true,
  },
  {
    path: "/nxb/add",
    name: "nxb.add",
    component: () => import("@/views/NhaXuatBanAdd.vue"),
    props: true,
  },
  {
    path: "/nxb/:id",
    name: "nxb.edit",
    component: () => import("@/views/NhaXuatBanEdit.vue"),
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
