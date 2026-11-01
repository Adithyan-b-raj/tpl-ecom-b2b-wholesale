import { onRequest as __api___route___js_onRequest } from "C:\\projects\\tpl-ecom-b2b-wholesale\\functions\\api\\[[route]].js"

export const routes = [
    {
      routePath: "/api/:route*",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api___route___js_onRequest],
    },
  ]