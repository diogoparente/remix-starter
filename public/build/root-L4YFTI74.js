import {
  ThemeBody,
  ThemeHead,
  ThemeProvider,
  useTheme
} from "/build/_shared/chunk-L5ETRQC4.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-L5O2GDC7.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-42Z7WWMI.js";

// empty-module:~/utils/theme.server
var require_theme = __commonJS({
  "empty-module:~/utils/theme.server"(exports, module) {
    module.exports = {};
  }
});

// app/root.tsx
var import_theme = __toESM(require_theme());

// app/styles/app.css
var app_default = "/build/_assets/app-AMQHJ3ZF.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
var meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "Diogo, but in the Web",
  description: "Welcome to my website!"
});
function App() {
  const data = useLoaderData();
  const [theme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    className: theme != null ? theme : "",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeHead, {
            ssrTheme: Boolean(data.theme)
          }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeBody, {
            ssrTheme: Boolean(data.theme)
          }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
function AppWithProviders() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, {
    specifiedTheme: data.theme,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(App, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
export {
  AppWithProviders as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-L4YFTI74.js.map
