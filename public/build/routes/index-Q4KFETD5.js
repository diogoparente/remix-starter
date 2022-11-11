import {
  useTheme
} from "/build/_shared/chunk-L5ETRQC4.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-L5O2GDC7.js";
import "/build/_shared/chunk-QDNB6PR5.js";
import {
  __toESM
} from "/build/_shared/chunk-42Z7WWMI.js";

// app/components/ThemeToggle/ThemeToggle.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ThemeToggle = () => {
  const [theme, setTheme] = useTheme();
  const toggleTheme = () => {
    setTheme(
      (prevTheme) => prevTheme === "light" /* LIGHT */ ? "dark" /* DARK */ : "light" /* LIGHT */
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
    tabIndex: 0,
    title: "theme switcher",
    id: "theme-switch",
    className: "relative inline-flex cursor-pointer items-center content-[''] after:content-['']",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "checkbox",
        value: "",
        id: "default-toggle",
        className: "peer sr-only",
        role: "switch",
        checked: theme === "dark" /* DARK */,
        "aria-labelledby": "theme-switch",
        readOnly: true
      }, void 0, false, {
        fileName: "app/components/ThemeToggle/ThemeToggle.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        "aria-label": "toggle-theme",
        onClick: toggleTheme,
        className: "glow dark:hover:c1-light peer h-7 w-12 rounded-full bg-c3 after:absolute after:top-[13%] after:left-[9%] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:text-center after:transition-all after:content-[''] hover:bg-c2 peer-checked:after:translate-x-full peer-checked:after:translate-x-full peer-focus:outline-none dark:after:border-c2 dark:after:bg-c5-light dark:hover:border dark:hover:border-c3"
      }, void 0, false, {
        fileName: "app/components/ThemeToggle/ThemeToggle.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/ThemeToggle/ThemeToggle.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};

// app/typography/Link.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Link2 = ({
  isExternal,
  url,
  children,
  extraClassNames
}) => {
  const baseClassName = "hover:underline text-c4 hover:decoration-c4 underline-offset-8 hover:dark:decoration-c4 hover:opacity-50 hover:transition-opacity";
  const L = () => isExternal ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
    href: url,
    target: "_blank",
    rel: "noreferrer",
    className: `${baseClassName} ${extraClassNames != null ? extraClassNames : ""}`,
    children
  }, void 0, false, {
    fileName: "app/typography/Link.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
    to: url,
    className: `${baseClassName} ${extraClassNames != null ? extraClassNames : ""}`,
    children
  }, void 0, false, {
    fileName: "app/typography/Link.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(L, {}, void 0, false, {
    fileName: "app/typography/Link.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};

// app/layout/Header/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Header = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
    className: "flew-row flex items-center justify-between bg-transparent p-4 text-xl font-semibold",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "header-badge glow",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, {
          url: "/",
          children: "diogocodes"
        }, void 0, false, {
          fileName: "app/layout/Header/Header.tsx",
          lineNumber: 8,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/layout/Header/Header.tsx",
        lineNumber: 7,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggle, {}, void 0, false, {
        fileName: "app/layout/Header/Header.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/layout/Header/Header.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};

// app/layout/Body/Body.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Body = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-1 flex-col",
    children
  }, void 0, false, {
    fileName: "app/layout/Body/Body.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
};

// app/layout/Footer/Footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = [
  {
    isExternal: true,
    url: "https://github.com/diogoparente",
    children: "Github",
    key: "github"
  },
  {
    isExternal: true,
    url: "https://www.linkedin.com/in/diogoparentedev/",
    children: "LinkedIn",
    key: "linkedin"
  },
  {
    isExternal: false,
    url: "/about-me",
    children: "About me",
    key: "about-me"
  }
];
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
    className: "h-40 w-full bg-c2 p-8 px-4 font-semibold text-c4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex min-h-full min-w-full flex-col justify-between",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-around",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mb-2 flex min-w-[50%] flex-wrap justify-around justify-around",
          children: links.map(({ key, children, ...link }) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, {
              ...link,
              extraClassNames: "ml-1 mr-1",
              children
            }, key, false, {
              fileName: "app/layout/Footer/Footer.tsx",
              lineNumber: 32,
              columnNumber: 17
            }, this);
          })
        }, void 0, false, {
          fileName: "app/layout/Footer/Footer.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/layout/Footer/Footer.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/layout/Footer/Footer.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/layout/Footer/Footer.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/layout/Layout/Layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Layout = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "text-fourth flex grow flex-col justify-between bg-c1",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
        fileName: "app/layout/Layout/Layout.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Body, {
        children
      }, void 0, false, {
        fileName: "app/layout/Layout/Layout.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/layout/Layout/Layout.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/layout/Layout/Layout.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};

// app/views/home/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const {} = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col",
    children: "Hello world"
  }, void 0, false, {
    fileName: "app/views/home/index.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function routes_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Index, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
export {
  routes_default as default
};
//# sourceMappingURL=/build/routes/index-Q4KFETD5.js.map
