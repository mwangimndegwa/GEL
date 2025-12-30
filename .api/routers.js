
// Files Imports
import * as configure from "@api/configure";
import * as API_000 from "@api/root/src/server/api/commerce/create-checkout-session/POST.ts";
import * as API_001 from "@api/root/src/server/api/health/GET.ts";

// Public RESTful API Methods and Paths
// This section describes the available HTTP methods and their corresponding endpoints (paths).
// POST /api/commerce/create-checkout-session/    src/server/api/commerce/create-checkout-session/POST.ts
// GET  /api/health/                              src/server/api/health/GET.ts

const internal  = [
  API_000.default  && { cb: API_000.default , method: "post" , route: "/commerce/create-checkout-session/" , url: "/api/commerce/create-checkout-session/" , source: "src/server/api/commerce/create-checkout-session/POST.ts" },
  API_001.default  && { cb: API_001.default , method: "get"  , route: "/health/"                           , url: "/api/health/"                           , source: "src/server/api/health/GET.ts"                            }
].filter(it => it);

export const routers = internal.map((it) => {
  const { method, route, url, source } = it;
  return { method, url, route, source };
});

export const endpoints = internal.map(
  (it) => it.method?.toUpperCase() + "\t" + it.url
);

export const applyRouters = (applyRouter) => {
  internal.forEach((it) => {
    it.cb = configure.callbackBefore?.(it.cb, it) || it.cb;
    applyRouter(it);
  });
};

