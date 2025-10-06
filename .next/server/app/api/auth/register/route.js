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
exports.id = "app/api/auth/register/route";
exports.ids = ["app/api/auth/register/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/register/route.ts":
/*!****************************************!*\
  !*** ./app/api/auth/register/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_database_mogooose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/database/mogooose */ \"(rsc)/./lib/database/mogooose.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.ts\");\n\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET;\nasync function POST(req) {\n    try {\n        await (0,_lib_database_mogooose__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const data = await req.json();\n        console.log(\"🟢 Received data:\", data);\n        // ✅ 1. Check if user exists\n        let user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n            email: data.email\n        });\n        if (user) {\n            console.log(\"🟡 Existing user found, updating...\");\n            // ✅ 2. Update existing user with any new fields provided\n            Object.assign(user, data);\n            await user.save();\n            // ✅ 3. Generate new JWT token\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n                id: user._id.toString(),\n                role: user.role\n            }, JWT_SECRET, {\n                expiresIn: \"7d\"\n            });\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"User updated successfully\",\n                token,\n                user\n            }, {\n                status: 200\n            });\n        }\n        // ✅ 4. Create new user if not found\n        user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n            ...data\n        });\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n            id: user._id.toString(),\n            role: user.role\n        }, JWT_SECRET, {\n            expiresIn: \"7d\"\n        });\n        // ✅ 6. Return new user + token\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"User registered successfully\",\n            token,\n            user\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"❌ Register Error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ1o7QUFDaUI7QUFDZjtBQUVqQyxNQUFNSSxhQUFhQyxRQUFRQyxHQUFHLENBQUNGLFVBQVU7QUFFbEMsZUFBZUcsS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTU4sa0VBQVNBO1FBQ2YsTUFBTU8sT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCQyxRQUFRQyxHQUFHLENBQUMscUJBQXFCSDtRQUVqQyw0QkFBNEI7UUFDNUIsSUFBSUksT0FBTyxNQUFNVixvREFBSUEsQ0FBQ1csT0FBTyxDQUFDO1lBQUVDLE9BQU9OLEtBQUtNLEtBQUs7UUFBQztRQUVsRCxJQUFJRixNQUFNO1lBQ1JGLFFBQVFDLEdBQUcsQ0FBQztZQUNaLHlEQUF5RDtZQUN6REksT0FBT0MsTUFBTSxDQUFDSixNQUFNSjtZQUNwQixNQUFNSSxLQUFLSyxJQUFJO1lBRWYsOEJBQThCO1lBQzlCLE1BQU1DLFFBQVFsQix3REFBUSxDQUNoQjtnQkFBRW9CLElBQUlSLEtBQUtTLEdBQUcsQ0FBQ0MsUUFBUTtnQkFBSUMsTUFBTVgsS0FBS1csSUFBSTtZQUFDLEdBQzNDcEIsWUFDQTtnQkFBRXFCLFdBQVc7WUFBSztZQUV4QixPQUFPekIscURBQVlBLENBQUNVLElBQUksQ0FDdEI7Z0JBQ0VnQixTQUFTO2dCQUNUUDtnQkFDQU47WUFDRixHQUNBO2dCQUFFYyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxvQ0FBb0M7UUFDcENkLE9BQU8sTUFBTVYsb0RBQUlBLENBQUN5QixNQUFNLENBQUM7WUFDdkIsR0FBR25CLElBQUk7UUFDVDtRQUVBLE1BQU1VLFFBQVFsQix3REFBUSxDQUNkO1lBQUVvQixJQUFJUixLQUFLUyxHQUFHLENBQUNDLFFBQVE7WUFBSUMsTUFBTVgsS0FBS1csSUFBSTtRQUFDLEdBQzNDcEIsWUFDQTtZQUFFcUIsV0FBVztRQUFLO1FBRzFCLCtCQUErQjtRQUMvQixPQUFPekIscURBQVlBLENBQUNVLElBQUksQ0FDdEI7WUFDRWdCLFNBQVM7WUFDVFA7WUFDQU47UUFDRixHQUNBO1lBQUVjLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU9FLE9BQVk7UUFDbkJsQixRQUFRa0IsS0FBSyxDQUFDLHFCQUFxQkE7UUFDbkMsT0FBTzdCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRW1CLE9BQU9BLE1BQU1ILE9BQU87UUFBQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNuRTtBQUNGIiwic291cmNlcyI6WyJEOlxccHJvamVjdDFcXEVwaWNMaW54XFxhcHBcXGFwaVxcYXV0aFxccmVnaXN0ZXJcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiQC9saWIvZGF0YWJhc2UvbW9nb29vc2VcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL1VzZXJcIjtcclxuXHJcbmNvbnN0IEpXVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIvCfn6IgUmVjZWl2ZWQgZGF0YTpcIiwgZGF0YSk7XHJcblxyXG4gICAgLy8g4pyFIDEuIENoZWNrIGlmIHVzZXIgZXhpc3RzXHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBkYXRhLmVtYWlsIH0pO1xyXG5cclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi8J+foSBFeGlzdGluZyB1c2VyIGZvdW5kLCB1cGRhdGluZy4uLlwiKTtcclxuICAgICAgLy8g4pyFIDIuIFVwZGF0ZSBleGlzdGluZyB1c2VyIHdpdGggYW55IG5ldyBmaWVsZHMgcHJvdmlkZWRcclxuICAgICAgT2JqZWN0LmFzc2lnbih1c2VyLCBkYXRhKTtcclxuICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XHJcblxyXG4gICAgICAvLyDinIUgMy4gR2VuZXJhdGUgbmV3IEpXVCB0b2tlblxyXG4gICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxyXG4gICAgICAgICAgICB7IGlkOiB1c2VyLl9pZC50b1N0cmluZygpLCByb2xlOiB1c2VyLnJvbGUgfSxcclxuICAgICAgICAgICAgSldUX1NFQ1JFVCxcclxuICAgICAgICAgICAgeyBleHBpcmVzSW46IFwiN2RcIiB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJVc2VyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICB0b2tlbixcclxuICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHN0YXR1czogMjAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDinIUgNC4gQ3JlYXRlIG5ldyB1c2VyIGlmIG5vdCBmb3VuZFxyXG4gICAgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oXHJcbiAgICAgICAgICAgIHsgaWQ6IHVzZXIuX2lkLnRvU3RyaW5nKCksIHJvbGU6IHVzZXIucm9sZSB9LFxyXG4gICAgICAgICAgICBKV1RfU0VDUkVULFxyXG4gICAgICAgICAgICB7IGV4cGlyZXNJbjogXCI3ZFwiIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBcclxuICAgIC8vIOKchSA2LiBSZXR1cm4gbmV3IHVzZXIgKyB0b2tlblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7XHJcbiAgICAgICAgbWVzc2FnZTogXCJVc2VyIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgdXNlcixcclxuICAgICAgfSxcclxuICAgICAgeyBzdGF0dXM6IDIwMSB9XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgUmVnaXN0ZXIgRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJqd3QiLCJjb25uZWN0REIiLCJVc2VyIiwiSldUX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJQT1NUIiwicmVxIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidXNlciIsImZpbmRPbmUiLCJlbWFpbCIsIk9iamVjdCIsImFzc2lnbiIsInNhdmUiLCJ0b2tlbiIsInNpZ24iLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwicm9sZSIsImV4cGlyZXNJbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJjcmVhdGUiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/register/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/database/mogooose.ts":
/*!**********************************!*\
  !*** ./lib/database/mogooose.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URI = process.env.MONGO_URI;\nif (!MONGO_URI) {\n    throw new Error(\"Please add MONGO_URI\");\n}\nlet isConnected = false;\nconst connectDB = async ()=>{\n    if (isConnected) return;\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI);\n        isConnected = true;\n        console.log(\"mongoDB connected\");\n    } catch (error) {\n        console.log(\"MongoDB connection error.Following error has occurred.........\\n\", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGF0YWJhc2UvbW9nb29vc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0YsU0FBUztBQUV2QyxJQUFJLENBQUNBLFdBQVU7SUFDWCxNQUFNLElBQUlHLE1BQU07QUFDcEI7QUFFQSxJQUFJQyxjQUFhO0FBRWpCLE1BQU1DLFlBQVc7SUFDYixJQUFJRCxhQUFhO0lBQ2pCLElBQUc7UUFDQyxNQUFNTCx1REFBZ0IsQ0FBQ0M7UUFDdkJJLGNBQWE7UUFDYkcsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCLEVBQ0EsT0FBTUMsT0FBTTtRQUNSRixRQUFRQyxHQUFHLENBQUMsb0VBQW1FQztJQUNuRjtBQUNKO0FBRUEsaUVBQWVKLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0MVxcRXBpY0xpbnhcXGxpYlxcZGF0YWJhc2VcXG1vZ29vb3NlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IE1PTkdPX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPX1VSSSBhcyBzdHJpbmc7XHJcblxyXG5pZiAoIU1PTkdPX1VSSSl7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIE1PTkdPX1VSSVwiKTtcclxufVxyXG5cclxubGV0IGlzQ29ubmVjdGVkID1mYWxzZTtcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9YXN5bmMoKT0+e1xyXG4gICAgaWYgKGlzQ29ubmVjdGVkKSByZXR1cm47XHJcbiAgICB0cnl7XHJcbiAgICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkkpO1xyXG4gICAgICAgIGlzQ29ubmVjdGVkID10cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW9uZ29EQiBjb25uZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3IuRm9sbG93aW5nIGVycm9yIGhhcyBvY2N1cnJlZC4uLi4uLi4uLlxcblwiLGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09fVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0REIiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/database/mogooose.ts\n");

/***/ }),

/***/ "(rsc)/./models/User.ts":
/*!************************!*\
  !*** ./models/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\n// Define schema\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    role: {\n        type: String,\n        enum: [\n            \"creator\",\n            \"brand\",\n            \"admin\"\n        ]\n    },\n    profileImageUrl: String,\n    firstName: String,\n    lastName: String,\n    email: {\n        type: String,\n        unique: true\n    },\n    phone: String,\n    displayName: String,\n    location: String,\n    instagram: String,\n    facebook: String,\n    tiktok: String,\n    otherSocial: String,\n    categories: [\n        String\n    ],\n    companyName: String,\n    shopAddress: String,\n    businessWebsite: String,\n    businessDescription: String,\n    abn: String,\n    username: String,\n    password: {\n        type: String,\n        minlength: 6\n    },\n    heardAboutUs: String,\n    notificationsEnabled: {\n        type: Boolean,\n        default: true\n    },\n    agreedToTerms: {\n        type: Boolean,\n        default: false\n    },\n    onboardingStatus: {\n        type: Number,\n        default: 1\n    }\n}, {\n    timestamps: true\n});\n// 🔑 Hash password before saving\nuserSchema.pre(\"save\", async function(next) {\n    if (!this.isModified(\"password\") || !this.password) return next();\n    try {\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].genSalt(10);\n        this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hash(this.password, salt);\n        next();\n    } catch (error) {\n        next(error);\n    }\n});\n// 🔑 Add comparePassword method\nuserSchema.methods.comparePassword = async function(candidatePassword) {\n    if (!this.password) return false;\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(candidatePassword, this.password);\n};\n// Prevent model overwrite in Next.js\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZEO0FBQy9CO0FBZ0M5QixnQkFBZ0I7QUFDaEIsTUFBTUcsYUFBYSxJQUFJRiw0Q0FBTUEsQ0FDM0I7SUFDRUcsTUFBTTtRQUFFQyxNQUFNQztRQUFRQyxNQUFNO1lBQUM7WUFBVztZQUFTO1NBQVE7SUFBQztJQUMxREMsaUJBQWlCRjtJQUNqQkcsV0FBV0g7SUFDWEksVUFBVUo7SUFDVkssT0FBTztRQUFFTixNQUFNQztRQUFRTSxRQUFRO0lBQUs7SUFDcENDLE9BQU9QO0lBQ1BRLGFBQWFSO0lBQ2JTLFVBQVVUO0lBQ1ZVLFdBQVdWO0lBQ1hXLFVBQVVYO0lBQ1ZZLFFBQVFaO0lBQ1JhLGFBQWFiO0lBQ2JjLFlBQVk7UUFBQ2Q7S0FBTztJQUNwQmUsYUFBYWY7SUFDYmdCLGFBQWFoQjtJQUNiaUIsaUJBQWlCakI7SUFDakJrQixxQkFBcUJsQjtJQUNyQm1CLEtBQUtuQjtJQUNMb0IsVUFBVXBCO0lBQ1ZxQixVQUFVO1FBQUV0QixNQUFNQztRQUFRc0IsV0FBVztJQUFFO0lBQ3ZDQyxjQUFjdkI7SUFDZHdCLHNCQUFzQjtRQUFFekIsTUFBTTBCO1FBQVNDLFNBQVM7SUFBSztJQUNyREMsZUFBZTtRQUFFNUIsTUFBTTBCO1FBQVNDLFNBQVM7SUFBTTtJQUMvQ0Usa0JBQWtCO1FBQUU3QixNQUFNOEI7UUFBUUgsU0FBUztJQUFFO0FBQy9DLEdBQ0E7SUFBRUksWUFBWTtBQUFLO0FBR3JCLGlDQUFpQztBQUNqQ2pDLFdBQVdrQyxHQUFHLENBQUMsUUFBUSxlQUFnQkMsSUFBSTtJQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQ1osUUFBUSxFQUFFLE9BQU9XO0lBRTNELElBQUk7UUFDRixNQUFNRSxPQUFPLE1BQU10Qyx3REFBYyxDQUFDO1FBQ2xDLElBQUksQ0FBQ3lCLFFBQVEsR0FBRyxNQUFNekIscURBQVcsQ0FBQyxJQUFJLENBQUN5QixRQUFRLEVBQUVhO1FBQ2pERjtJQUNGLEVBQUUsT0FBT0ssT0FBTztRQUNkTCxLQUFLSztJQUNQO0FBQ0Y7QUFFQSxnQ0FBZ0M7QUFDaEN4QyxXQUFXeUMsT0FBTyxDQUFDQyxlQUFlLEdBQUcsZUFBZ0JDLGlCQUF5QjtJQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDbkIsUUFBUSxFQUFFLE9BQU87SUFDM0IsT0FBT3pCLHdEQUFjLENBQUM0QyxtQkFBbUIsSUFBSSxDQUFDbkIsUUFBUTtBQUN4RDtBQUVBLHFDQUFxQztBQUNyQyxNQUFNcUIsT0FBcUJoRCx3REFBZSxDQUFDZ0QsSUFBSSxJQUFJaEQscURBQWMsQ0FBUSxRQUFRRztBQUVqRixpRUFBZTZDLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0MVxcRXBpY0xpbnhcXG1vZGVsc1xcVXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCwgTW9kZWwgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuXHJcbi8vIERlZmluZSB1c2VyIGludGVyZmFjZVxyXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIHJvbGU6IFwiY3JlYXRvclwiIHwgXCJicmFuZFwiIHwgXCJhZG1pblwiOyAvLyBFeGFtcGxlIGVudW0gcm9sZXNcclxuICBwcm9maWxlSW1hZ2VVcmw/OiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lPzogc3RyaW5nO1xyXG4gIGxhc3ROYW1lPzogc3RyaW5nO1xyXG4gIGVtYWlsPzogc3RyaW5nO1xyXG4gIHBob25lPzogc3RyaW5nO1xyXG4gIGRpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xyXG4gIGluc3RhZ3JhbT86IHN0cmluZztcclxuICBmYWNlYm9vaz86IHN0cmluZztcclxuICB0aWt0b2s/OiBzdHJpbmc7XHJcbiAgb3RoZXJTb2NpYWw/OiBzdHJpbmc7XHJcbiAgY2F0ZWdvcmllcz86IHN0cmluZ1tdO1xyXG4gIGNvbXBhbnlOYW1lPzogc3RyaW5nO1xyXG4gIHNob3BBZGRyZXNzPzogc3RyaW5nO1xyXG4gIGJ1c2luZXNzV2Vic2l0ZT86IHN0cmluZztcclxuICBidXNpbmVzc0Rlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIGFibj86IHN0cmluZztcclxuICB1c2VybmFtZT86IHN0cmluZztcclxuICBwYXNzd29yZD86IHN0cmluZztcclxuICBoZWFyZEFib3V0VXM/OiBzdHJpbmc7XHJcbiAgbm90aWZpY2F0aW9uc0VuYWJsZWQ/OiBib29sZWFuO1xyXG4gIGFncmVlZFRvVGVybXM/OiBib29sZWFuO1xyXG4gIG9uYm9hcmRpbmdTdGF0dXM6IG51bWJlcjsgLy8gMS00IHN0ZXBzIGNvbXBsZXRlZFxyXG5cclxuICBjb21wYXJlUGFzc3dvcmQoY2FuZGlkYXRlUGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj47XHJcbn1cclxuXHJcbi8vIERlZmluZSBzY2hlbWFcclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWE8SVVzZXI+KFxyXG4gIHtcclxuICAgIHJvbGU6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBbXCJjcmVhdG9yXCIsIFwiYnJhbmRcIiwgXCJhZG1pblwiXSB9LFxyXG4gICAgcHJvZmlsZUltYWdlVXJsOiBTdHJpbmcsXHJcbiAgICBmaXJzdE5hbWU6IFN0cmluZyxcclxuICAgIGxhc3ROYW1lOiBTdHJpbmcsXHJcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gICAgcGhvbmU6IFN0cmluZyxcclxuICAgIGRpc3BsYXlOYW1lOiBTdHJpbmcsXHJcbiAgICBsb2NhdGlvbjogU3RyaW5nLFxyXG4gICAgaW5zdGFncmFtOiBTdHJpbmcsXHJcbiAgICBmYWNlYm9vazogU3RyaW5nLFxyXG4gICAgdGlrdG9rOiBTdHJpbmcsXHJcbiAgICBvdGhlclNvY2lhbDogU3RyaW5nLFxyXG4gICAgY2F0ZWdvcmllczogW1N0cmluZ10sXHJcbiAgICBjb21wYW55TmFtZTogU3RyaW5nLFxyXG4gICAgc2hvcEFkZHJlc3M6IFN0cmluZyxcclxuICAgIGJ1c2luZXNzV2Vic2l0ZTogU3RyaW5nLFxyXG4gICAgYnVzaW5lc3NEZXNjcmlwdGlvbjogU3RyaW5nLFxyXG4gICAgYWJuOiBTdHJpbmcsXHJcbiAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCBtaW5sZW5ndGg6IDYgfSxcclxuICAgIGhlYXJkQWJvdXRVczogU3RyaW5nLFxyXG4gICAgbm90aWZpY2F0aW9uc0VuYWJsZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxyXG4gICAgYWdyZWVkVG9UZXJtczogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gICAgb25ib2FyZGluZ1N0YXR1czogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDEgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG4vLyDwn5SRIEhhc2ggcGFzc3dvcmQgYmVmb3JlIHNhdmluZ1xyXG51c2VyU2NoZW1hLnByZShcInNhdmVcIiwgYXN5bmMgZnVuY3Rpb24gKG5leHQpIHtcclxuICBpZiAoIXRoaXMuaXNNb2RpZmllZChcInBhc3N3b3JkXCIpIHx8ICF0aGlzLnBhc3N3b3JkKSByZXR1cm4gbmV4dCgpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCBzYWx0KTtcclxuICAgIG5leHQoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbmV4dChlcnJvciBhcyBhbnkpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyDwn5SRIEFkZCBjb21wYXJlUGFzc3dvcmQgbWV0aG9kXHJcbnVzZXJTY2hlbWEubWV0aG9kcy5jb21wYXJlUGFzc3dvcmQgPSBhc3luYyBmdW5jdGlvbiAoY2FuZGlkYXRlUGFzc3dvcmQ6IHN0cmluZykge1xyXG4gIGlmICghdGhpcy5wYXNzd29yZCkgcmV0dXJuIGZhbHNlO1xyXG4gIHJldHVybiBiY3J5cHQuY29tcGFyZShjYW5kaWRhdGVQYXNzd29yZCwgdGhpcy5wYXNzd29yZCk7XHJcbn07XHJcblxyXG4vLyBQcmV2ZW50IG1vZGVsIG92ZXJ3cml0ZSBpbiBOZXh0LmpzXHJcbmNvbnN0IFVzZXI6IE1vZGVsPElVc2VyPiA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsPElVc2VyPihcIlVzZXJcIiwgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJiY3J5cHQiLCJ1c2VyU2NoZW1hIiwicm9sZSIsInR5cGUiLCJTdHJpbmciLCJlbnVtIiwicHJvZmlsZUltYWdlVXJsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInVuaXF1ZSIsInBob25lIiwiZGlzcGxheU5hbWUiLCJsb2NhdGlvbiIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwidGlrdG9rIiwib3RoZXJTb2NpYWwiLCJjYXRlZ29yaWVzIiwiY29tcGFueU5hbWUiLCJzaG9wQWRkcmVzcyIsImJ1c2luZXNzV2Vic2l0ZSIsImJ1c2luZXNzRGVzY3JpcHRpb24iLCJhYm4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibWlubGVuZ3RoIiwiaGVhcmRBYm91dFVzIiwibm90aWZpY2F0aW9uc0VuYWJsZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsImFncmVlZFRvVGVybXMiLCJvbmJvYXJkaW5nU3RhdHVzIiwiTnVtYmVyIiwidGltZXN0YW1wcyIsInByZSIsIm5leHQiLCJpc01vZGlmaWVkIiwic2FsdCIsImdlblNhbHQiLCJoYXNoIiwiZXJyb3IiLCJtZXRob2RzIiwiY29tcGFyZVBhc3N3b3JkIiwiY2FuZGlkYXRlUGFzc3dvcmQiLCJjb21wYXJlIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/User.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=D%3A%5Cproject1%5CEpicLinx%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cproject1%5CEpicLinx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=D%3A%5Cproject1%5CEpicLinx%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cproject1%5CEpicLinx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_project1_EpicLinx_app_api_auth_register_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/register/route.ts */ \"(rsc)/./app/api/auth/register/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/register/route\",\n        pathname: \"/api/auth/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/register/route\"\n    },\n    resolvedPagePath: \"D:\\\\project1\\\\EpicLinx\\\\app\\\\api\\\\auth\\\\register\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_project1_EpicLinx_app_api_auth_register_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGcmVnaXN0ZXIlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDcHJvamVjdDElNUNFcGljTGlueCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q3Byb2plY3QxJTVDRXBpY0xpbngmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ1U7QUFDdkY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXHByb2plY3QxXFxcXEVwaWNMaW54XFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxyZWdpc3RlclxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9yZWdpc3Rlci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvcmVnaXN0ZXJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxwcm9qZWN0MVxcXFxFcGljTGlueFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxccmVnaXN0ZXJcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=D%3A%5Cproject1%5CEpicLinx%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cproject1%5CEpicLinx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

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

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/bcryptjs","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=D%3A%5Cproject1%5CEpicLinx%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cproject1%5CEpicLinx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();