import type {RouterConfig} from '@nuxt/schema'
import { RouterPaths } from '~/types/router';

export default <RouterConfig>{
  
  linkActiveClass: "active",
  linkExactActiveClass: "exact",
  routes: (_routes) => {
    // console.log("RouterConfig", _routes);
    return [
      {
        path: "/courses",
        component: () => import("~/pages/courses/index.vue"),
        children: [
          {     
            path: "",
            name: RouterPaths.COURSES,
            component: () => import("~/pages/courses/index.vue"),
          },
          {
            path: "update/:id",
            component: () => import("~/pages/courses/update/layout.vue"),
            children: [
              {
                path: "",
                name: RouterPaths.COURSES_UPDATE,
                component: () => import("~/pages/courses/update/index.vue"),
              },
              {
                path: "students",
                name: RouterPaths.COURSES_STUNDETS,
                component: () => import("~/pages/courses/update/students.vue"),
              },
              {
                path: "tests",
                name: RouterPaths.COURSES_TESTS,
                component: () => import("~/pages/courses/update/tests.vue"),
              },
            ]
          },
        ],
      },
    ];
  },


};