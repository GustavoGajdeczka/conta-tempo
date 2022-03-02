import Vue from 'vue';
import VueRouter from "vue-router";
import Layout from '../layout';


Vue.use(VueRouter)

const routes = [

  //Home
  {
    path: "",
    component: Layout,
    children: [
      {
        path:"/",
        name:"home",
        component: () => import(/* webpackChunkName: "home" */ "@/pages/Home")
      }
    ]
  },
  //Autenticação
  {
    path: "/login",
    component: {
      render(c) {
        return c("router-view");
      }
    },
    children: [
      {
        path: "login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ "@/pages/Login")
      }
    ]
  },
]

const router = new VueRouter({routes})

export default router