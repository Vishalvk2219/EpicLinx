/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/logout/route";
exports.ids = ["app/api/auth/logout/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/logout/route.ts":
/*!**************************************!*\
  !*** ./app/api/auth/logout/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiLogout: () => (/* binding */ apiLogout)\n/* harmony export */ });\n/* harmony import */ var _stores_useAuthStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/stores/useAuthStore */ \"(rsc)/./stores/useAuthStore.ts\");\n\nasync function apiLogout() {\n    _stores_useAuthStore__WEBPACK_IMPORTED_MODULE_0__.useAuthStore.getState().clearUser();\n    localStorage.removeItem(\"token\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFEO0FBQzlDLGVBQWVDO0lBQ3BCRCw4REFBWUEsQ0FBQ0UsUUFBUSxHQUFHQyxTQUFTO0lBQ2pDQyxhQUFhQyxVQUFVLENBQUM7QUFDMUIiLCJzb3VyY2VzIjpbIkQ6XFxwMVxcRXBpY0xpbnhcXGFwcFxcYXBpXFxhdXRoXFxsb2dvdXRcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUF1dGhTdG9yZSB9IGZyb20gXCJAL3N0b3Jlcy91c2VBdXRoU3RvcmVcIjtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwaUxvZ291dCgpIHtcclxuICB1c2VBdXRoU3RvcmUuZ2V0U3RhdGUoKS5jbGVhclVzZXIoKTtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VBdXRoU3RvcmUiLCJhcGlMb2dvdXQiLCJnZXRTdGF0ZSIsImNsZWFyVXNlciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/logout/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=D%3A%5Cp1%5CEpicLinx%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cp1%5CEpicLinx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=D%3A%5Cp1%5CEpicLinx%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cp1%5CEpicLinx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_p1_EpicLinx_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/logout/route.ts */ \"(rsc)/./app/api/auth/logout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/logout/route\",\n        pathname: \"/api/auth/logout\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/logout/route\"\n    },\n    resolvedPagePath: \"D:\\\\p1\\\\EpicLinx\\\\app\\\\api\\\\auth\\\\logout\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_p1_EpicLinx_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9nb3V0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGbG9nb3V0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRmxvZ291dCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDcDElNUNFcGljTGlueCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q3AxJTVDRXBpY0xpbngmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXHAxXFxcXEVwaWNMaW54XFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dvdXRcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9nb3V0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9sb2dvdXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxccDFcXFxcRXBpY0xpbnhcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXGxvZ291dFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=D%3A%5Cp1%5CEpicLinx%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cp1%5CEpicLinx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./stores/useAuthStore.ts":
/*!********************************!*\
  !*** ./stores/useAuthStore.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuthStore: () => (/* binding */ useAuthStore)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"(rsc)/./node_modules/zustand/esm/react.mjs\");\n\nconst useAuthStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        user: null,\n        setUser: (newUser)=>set((state)=>({\n                    user: {\n                        ...state.user || {},\n                        ...newUser\n                    }\n                })),\n        updateUser: (updates)=>set((state)=>{\n                console.log(\"Current user before update:\", state.user); // debug line\n                if (!state.user) return {}; // safeguard\n                return {\n                    user: {\n                        ...state.user,\n                        ...updates\n                    }\n                };\n            }),\n        clearUser: ()=>set({\n                user: null\n            })\n    }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zdG9yZXMvdXNlQXV0aFN0b3JlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlDO0FBOEMxQixNQUFNQyxlQUFlRCwrQ0FBTUEsQ0FBWSxDQUFDRSxNQUFTO1FBQ3REQyxNQUFNO1FBRU5DLFNBQVMsQ0FBQ0MsVUFDUkgsSUFBSSxDQUFDSSxRQUFXO29CQUNkSCxNQUFNO3dCQUNKLEdBQUlHLE1BQU1ILElBQUksSUFBSSxDQUFDLENBQUM7d0JBQ3BCLEdBQUdFLE9BQU87b0JBQ1o7Z0JBQ0Y7UUFFRkUsWUFBWSxDQUFDQyxVQUNYTixJQUFJLENBQUNJO2dCQUNIRyxRQUFRQyxHQUFHLENBQUMsK0JBQStCSixNQUFNSCxJQUFJLEdBQUcsYUFBYTtnQkFDckUsSUFBSSxDQUFDRyxNQUFNSCxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsWUFBWTtnQkFDeEMsT0FBTztvQkFDTEEsTUFBTTt3QkFDSixHQUFHRyxNQUFNSCxJQUFJO3dCQUNiLEdBQUdLLE9BQU87b0JBQ1o7Z0JBQ0Y7WUFDRjtRQUVGRyxXQUFXLElBQU1ULElBQUk7Z0JBQUVDLE1BQU07WUFBSztJQUNwQyxJQUFJIiwic291cmNlcyI6WyJEOlxccDFcXEVwaWNMaW54XFxzdG9yZXNcXHVzZUF1dGhTdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwienVzdGFuZFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgVXNlclJvbGUgPSBcImNyZWF0b3JcIiB8IFwiYnJhbmRcIiB8IFwiYWRtaW5cIjtcclxuZXhwb3J0IHR5cGUgT25ib2FyZGluZ1N0YXR1cyA9IDEgfCAyIHwgMyB8IDQgfCA1O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgcHJvZmlsZUltYWdlVXJsPzogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZT86IHN0cmluZztcclxuICBsYXN0TmFtZT86IHN0cmluZztcclxuICBkaXNwbGF5TmFtZT86IHN0cmluZztcclxuICBwaG9uZT86IHN0cmluZztcclxuICBsb2NhdGlvbj86IHN0cmluZztcclxuICByb2xlOiBVc2VyUm9sZTtcclxuICBvbmJvYXJkaW5nU3RhdHVzOiBPbmJvYXJkaW5nU3RhdHVzO1xyXG4gIGlzRW1haWxWZXJpZmllZDogYm9vbGVhbjtcclxuICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuICBpbnN0YWdyYW0/OiBzdHJpbmc7XHJcbiAgZmFjZWJvb2s/OiBzdHJpbmc7XHJcbiAgdGlrdG9rPzogc3RyaW5nO1xyXG4gIG90aGVyU29jaWFsPzogc3RyaW5nO1xyXG4gIGNvbXBhbnlOYW1lPzogc3RyaW5nO1xyXG4gIHNob3BBZGRyZXNzPzogc3RyaW5nO1xyXG4gIGJ1c2luZXNzV2Vic2l0ZT86IHN0cmluZztcclxuICBidXNpbmVzc0Rlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIGNhdGVnb3JpZXM/OiBzdHJpbmdbXTtcclxuICBjYXJkTGFzdDQ/OiBzdHJpbmc7XHJcbiAgY2FyZEJyYW5kPzogc3RyaW5nO1xyXG4gIGNhcmRFeHBpcnk/OiBzdHJpbmc7XHJcbiAgYWJuPzogc3RyaW5nO1xyXG4gIGhlYXJkQWJvdXRVcz86IHN0cmluZztcclxuICBub3RpZmljYXRpb25zRW5hYmxlZDogYm9vbGVhbjtcclxuICBhZ3JlZWRUb1Rlcm1zOiBib29sZWFuO1xyXG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xyXG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXV0aFN0b3JlIHtcclxuICB1c2VyOiBVc2VyIHwgbnVsbDtcclxuICBzZXRVc2VyOiAodXNlcjogVXNlcikgPT4gdm9pZDtcclxuICB1cGRhdGVVc2VyOiAodXBkYXRlczogUGFydGlhbDxVc2VyPikgPT4gdm9pZDtcclxuICBjbGVhclVzZXI6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoU3RvcmUgPSBjcmVhdGU8QXV0aFN0b3JlPigoc2V0KSA9PiAoe1xyXG4gIHVzZXI6IG51bGwsXHJcblxyXG4gIHNldFVzZXI6IChuZXdVc2VyKSA9PlxyXG4gICAgc2V0KChzdGF0ZSkgPT4gKHtcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIC4uLihzdGF0ZS51c2VyIHx8IHt9KSxcclxuICAgICAgICAuLi5uZXdVc2VyLFxyXG4gICAgICB9LFxyXG4gICAgfSkpLFxyXG5cclxuICB1cGRhdGVVc2VyOiAodXBkYXRlcykgPT5cclxuICAgIHNldCgoc3RhdGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IHVzZXIgYmVmb3JlIHVwZGF0ZTpcIiwgc3RhdGUudXNlcik7IC8vIGRlYnVnIGxpbmVcclxuICAgICAgaWYgKCFzdGF0ZS51c2VyKSByZXR1cm4ge307IC8vIHNhZmVndWFyZFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAuLi51cGRhdGVzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9KSxcclxuXHJcbiAgY2xlYXJVc2VyOiAoKSA9PiBzZXQoeyB1c2VyOiBudWxsIH0pLFxyXG59KSk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJ1c2VBdXRoU3RvcmUiLCJzZXQiLCJ1c2VyIiwic2V0VXNlciIsIm5ld1VzZXIiLCJzdGF0ZSIsInVwZGF0ZVVzZXIiLCJ1cGRhdGVzIiwiY29uc29sZSIsImxvZyIsImNsZWFyVXNlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./stores/useAuthStore.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/zustand"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=D%3A%5Cp1%5CEpicLinx%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cp1%5CEpicLinx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();