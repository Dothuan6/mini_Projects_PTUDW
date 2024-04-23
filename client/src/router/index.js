import { createWebHistory, createRouter } from "vue-router";
import Book from "@/views/book/Book.vue";
import ShowSachMuon from "@/views/muonsach/ShowSachMuon.vue";
import MuonSach from "@/views/muonsach/MuonSachAdd.vue";
import QuanLySachMuon from "@/views/muonsach/MuonSach.vue";
import SachDaMuon from "@/views/muonsach/SachDaMuon.vue";
const routes = [
  {
    path: "/",
    name: "book",
    component: Book,
  },
  {
    path: "/sachmuon",
    name: "sachmuon",
    component: ShowSachMuon,
  },
  {
    path: "/quanlysachmuon",
    name: "quanlysachmuon",
    component: QuanLySachMuon,
  },
  {
    path: "/sachdamuon",
    name: "sachdamuon",
    component: SachDaMuon,
  },
  {
    path: "/sachmuon/add/:id",
    name: "sachmuon.add",
    component: MuonSach,
    props: true,
  },
  {
    path: "/book/:id",
    name: "book.edit",
    component: () => import("@/views/book/BookEdit.vue"),
    props: true,
  },
  {
    path: "/book/add",
    name: "book.add",
    component: () => import("@/views/book/BookAdd.vue"),
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/Error.vue"),
  },
  {
    path: "/docgia/login",
    name: "docgia.login",
    component: () => import("@/views/docgia/DocGiaLog.vue"),
  },
  {
    path: "/docgia/register",
    name: "docgia.register",
    component: () => import("@/views/docgia/DocGiaReg.vue"),
    props: true,
  },
  {
    path: "/nhanvien/login",
    name: "nhanvien.login",
    component: () => import("@/views/nhanvien/NhanVienLog.vue"),
  },

  {
    path: "/nhanvien/register",
    name: "nhanvien.register",
    component: () => import("@/views/nhanvien/NhanVienReg.vue"),
    props: true,
  },
  {
    path: "/docgia",
    name: "showdocgia",
    component: () => import("@/views/docgia/ShowDocGia.vue"),
    // props: true,
  },
  {
    path: "/nxb",
    name: "shownxb",
    component: () => import("@/views/nhaxuatban/ShowNhaXuatBan.vue"),
    // props: true,
  },
  {
    path: "/nxb/add",
    name: "nxb.add",
    component: () => import("@/views/nhaxuatban/NhaXuatBanAdd.vue"),
    props: true,
  },
  {
    path: "/nxb/:id",
    name: "nxb.edit",
    component: () => import("@/views/nhaxuatban/NhaXuatBanEdit.vue"),
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
