import "/build/_shared/chunk-Z2L3SRKE.js";
import {
  useTheme
} from "/build/_shared/chunk-L5ETRQC4.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-L5O2GDC7.js";
import "/build/_shared/chunk-Z2NXYFIQ.js";
import "/build/_shared/chunk-3QNER2TD.js";
import "/build/_shared/chunk-U32DHN5A.js";
import "/build/_shared/chunk-TH24RCDI.js";
import "/build/_shared/chunk-ALIUCULJ.js";
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

// app/typography/Title.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var commonStyle = "font-semibold text-c2-light dark:text-c5-light";
var TitleSizes = {
  ["h1" /* H1 */]: ({ children, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
    className: `${commonStyle} text-6xl md-max:text-4xl ${className != null ? className : ""}`,
    children
  }, void 0, false, {
    fileName: "app/typography/Title.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this),
  ["h2" /* H2 */]: ({ children, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
    className: `${commonStyle} text-4xl md-max:text-2xl ${className != null ? className : ""}`,
    children
  }, void 0, false, {
    fileName: "app/typography/Title.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this),
  ["h3" /* H3 */]: ({ children, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
    className: `${commonStyle} text-2xl md-max:text-xl ${className != null ? className : ""}`,
    children
  }, void 0, false, {
    fileName: "app/typography/Title.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this),
  ["h4" /* H4 */]: ({ children, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
    className: `${commonStyle} text-l md-max:text-m ${className != null ? className : ""}`,
    children
  }, void 0, false, {
    fileName: "app/typography/Title.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this)
};
var Title = ({
  children,
  size,
  className
}) => {
  return TitleSizes[size]({ children, className });
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
  const L2 = () => isExternal ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(L2, {}, void 0, false, {
    fileName: "app/typography/Link.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};

// app/typography/Paragraph.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Paragraph = ({
  children,
  className
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
  className: `text-l md-max:text-m font-medium text-c4 text-shadow sm-max:text-sm ${className != null ? className : ""}`,
  children
}, void 0, false, {
  fileName: "app/typography/Paragraph.tsx",
  lineNumber: 10,
  columnNumber: 3
}, this);

// app/typography/Bold.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Bold = ({
  children,
  extraClassNames
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
  className: `font-semibold text-c2-light dark:text-c5-light ${extraClassNames != null ? extraClassNames : ""}`,
  children
}, void 0, false, {
  fileName: "app/typography/Bold.tsx",
  lineNumber: 10,
  columnNumber: 3
}, this);

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
    className: "text-c4 h-40 w-full bg-c2 p-8 px-4 font-semibold",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex min-h-full min-w-full flex-col justify-between",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex justify-center font-light",
          children: [
            "All icons provided by",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, {
              isExternal: true,
              url: "https://simpleicons.org/",
              extraClassNames: "font-bold ml-1 mr-1",
              children: "Simple Icons"
            }, void 0, false, {
              fileName: "app/layout/Footer/Footer.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this),
            " ",
            "\u{1F49A}"
          ]
        }, void 0, true, {
          fileName: "app/layout/Footer/Footer.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
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

// app/views/home/sections/Social.tsx
var import_react3 = __toESM(require_react());

// node_modules/react-typist-component/dist/react-typist-component.mjs
var import_react2 = __toESM(require_react(), 1);
var v = (r) => r == null;
var q = (r, s) => {
  if (typeof s != "string") {
    const { children: t, ...n } = s.props;
    s.key || (n.key = "typist-cursor"), s = import_react2.default.cloneElement(s, n, t);
  }
  const o = (t) => {
    if (!t)
      return t;
    if (t.length === 0)
      return [s];
    const n = t[t.length - 1];
    if (typeof n == "string")
      return [...t, s];
    const { children: c, ...u } = n.props;
    if (v(c))
      return [...t, s];
    const e = o(c), a = import_react2.default.cloneElement(n, u, e);
    return [...t.slice(0, -1), a];
  };
  return o(r);
};
var z = () => {
};
var G = (r) => r.split("");
var b = (r) => null;
var S = (r) => null;
var H = (r, s) => {
  let o = 0;
  const t = (n) => import_react2.Children.map(n, (u) => {
    if (o >= s.length)
      return null;
    if ((0, import_react2.isValidElement)(u)) {
      if (u.type === b || u.type === S)
        return null;
      const { children: e, ...a } = u.props;
      if (v(e))
        return s[o++];
      const p = t(e);
      return p && p.length === 0 ? null : (0, import_react2.cloneElement)(u, a, p);
    }
    return typeof u == "string" || typeof u == "number" ? s[o++] : null;
  });
  return t(r);
};
var K = ({ children: r }) => /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, r);
function J(r, s) {
  const o = [], t = [];
  let n = false;
  const c = (u) => {
    import_react2.Children.forEach(u, (e) => {
      if ((0, import_react2.isValidElement)(e)) {
        if (e.type === S)
          return;
        if (e.type === b) {
          let f = e.props.count;
          for (; f--; ) {
            let y = t.length - 1, E = t[y];
            for (; E === null && y > 0; )
              y -= 1, E = t[y];
            if (E === null)
              break;
            if (typeof E == "object" && (t[y] = null), typeof E == "string") {
              const w = s(E).slice(0, -1).join("");
              t[y] = w || null;
            }
            o.push([...t]);
          }
          return;
        }
        if (e.type === K) {
          n = true, import_react2.Children.forEach(e.props.children, c), n = false;
          return;
        }
        if (v(e.props.children)) {
          t.push(e), o.push([...t]);
          return;
        }
        import_react2.Children.forEach(e.props.children, c);
      }
      const a = (() => {
        if (typeof e == "number")
          return e.toString(10);
        if (typeof e == "string")
          return e;
      })();
      if (a === void 0)
        return;
      if (n) {
        t.push(a), o.push([...t]);
        return;
      }
      const p = s(a), l = t.length;
      for (let f = 1; f <= p.length; f++) {
        const y = p.slice(0, f).join("");
        t[l] = y, o.push([...t]);
      }
    });
  };
  return c(r), o.map((u) => H(r, u));
}
var O = (r) => ({
  type: "TYPE_TOKEN",
  payload: r
});
var Q = (r) => ({
  type: "BACKSPACE",
  payload: r
});
var U = (r) => ({ type: "DELAY", payload: r });
var W = (r) => ({ type: "PASTE", payload: r });
var X = (r, s) => {
  const o = [];
  let t = false, n = 0;
  const c = (u) => {
    import_react2.Children.forEach(u, (e) => {
      if ((0, import_react2.isValidElement)(e)) {
        if (e.type === b) {
          const l = e.props.count, f = l > n ? n : l;
          n -= f, o.push(Q(f));
          return;
        }
        if (e.type === S) {
          o.push(U(e.props.ms));
          return;
        }
        if (e.type === K) {
          t = true, import_react2.Children.forEach(e.props.children, c), t = false;
          return;
        }
        if (v(e.props.children)) {
          n += 1, o.push(O(e));
          return;
        }
        import_react2.Children.forEach(e.props.children, c);
      }
      const a = (() => {
        if (typeof e == "number")
          return e.toString(10);
        if (typeof e == "string")
          return e;
      })();
      if (a === void 0)
        return;
      if (t) {
        n += s(a).length, o.push(W(a));
        return;
      }
      const p = s(a);
      n += p.length, p.forEach((l) => {
        o.push(O(l));
      });
    });
  };
  return c(r), o;
};
var Z = ({
  cursor: r,
  disabled: s = false,
  restartKey: o,
  children: t,
  splitter: n = G,
  typingDelay: c = 75,
  backspaceDelay: u = c,
  onTypingDone: e,
  startDelay: a = 0,
  finishDelay: p = 0,
  loop: l = false,
  pause: f = false
}) => {
  const [y, E] = (0, import_react2.useState)([]), [N, w] = (0, import_react2.useState)(-1), k = (0, import_react2.useRef)(z), C = (0, import_react2.useRef)(l), x = (0, import_react2.useRef)(f), h = (0, import_react2.useCallback)((m) => new Promise((g, i) => {
    const T = typeof m == "number" ? m : m(), I = setTimeout(g, T);
    k.current = () => {
      clearTimeout(I), i();
    };
  }), []), _ = (0, import_react2.useCallback)(() => new Promise((m, g) => {
    const i = setInterval(() => {
      x.current || (clearInterval(i), m());
    });
    k.current = () => {
      clearInterval(i), g();
    };
  }), []), d = (0, import_react2.useCallback)(() => new Promise((m, g) => {
    const i = setInterval(() => {
      C.current && (clearInterval(i), m());
    });
    k.current = () => {
      clearInterval(i), g();
    };
  }), []);
  (0, import_react2.useEffect)(() => {
    C.current = l, x.current = f;
  }, [l, f]), (0, import_react2.useEffect)(() => {
    const m = J(t, n);
    if (E(m), s) {
      w(m.length - 1);
      return;
    }
    return (async () => {
      try {
        do {
          w(-1);
          const g = X(t, n);
          a > 0 && await h(a);
          for (const { type: i, payload: T } of g)
            if (x.current && await _(), i === "TYPE_TOKEN")
              w((I) => I + 1), await h(c);
            else if (i === "BACKSPACE") {
              let I = T;
              for (; I--; )
                w((M) => M + 1), await h(u);
            } else
              i === "PASTE" ? w((I) => I + 1) : i === "DELAY" && await h(T);
          e == null || e(), p > 0 && await h(p), C.current || await d();
        } while (C.current);
      } catch {
      }
    })(), () => {
      k.current();
    };
  }, [o, s]);
  const Y = y[N];
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, r ? q(Y, r) : Y);
};
var D = Object.assign(Z, { Delay: S, Backspace: b, Paste: K });

// app/components/BlobbyPhoto/BlobbyPhoto.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Blob = ({ blob }) => {
  switch (blob) {
    case "blob_1":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
        className: "blob md-max:max-w-[40rem] md-min:w-full",
        id: "blob_1",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 500 500",
        style: { opacity: 1 },
        filter: "blur(0px)",
        transform: "rotate(33)",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
              id: "gradient",
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
                  offset: "0%",
                  type: "lower"
                }, void 0, false, {
                  fileName: "app/components/BlobbyPhoto/BlobbyPhoto.tsx",
                  lineNumber: 17,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
                  offset: "100%",
                  type: "higher"
                }, void 0, false, {
                  fileName: "app/components/BlobbyPhoto/BlobbyPhoto.tsx",
                  lineNumber: 18,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/BlobbyPhoto/BlobbyPhoto.tsx",
              lineNumber: 16,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/BlobbyPhoto/BlobbyPhoto.tsx",
            lineNumber: 15,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fill: "url(#gradient)",
            style: { opacity: 1 },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
              attributeName: "d",
              dur: "12500ms",
              repeatCount: "indefinite",
              values: "M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z"
            }, void 0, false, {
              fileName: "app/components/BlobbyPhoto/BlobbyPhoto.tsx",
              lineNumber: 22,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/BlobbyPhoto/BlobbyPhoto.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/BlobbyPhoto/BlobbyPhoto.tsx",
        lineNumber: 5,
        columnNumber: 9
      }, this);
    default:
      return null;
  }
};
var BlobbyPhoto = ({
  imgSrc,
  alt,
  blob
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "relative flex basis-1/2 flex-col items-center justify-center overflow-x-hidden overflow-y-hidden md-max:min-w-full",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Blob, {
      blob
    }, void 0, false, {
      fileName: "app/components/BlobbyPhoto/BlobbyPhoto.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
      src: imgSrc,
      alt,
      height: "100%",
      width: "100%",
      className: "absolute h-full max-w-full"
    }, void 0, false, {
      fileName: "app/components/BlobbyPhoto/BlobbyPhoto.tsx",
      lineNumber: 48,
      columnNumber: 5
    }, this)
  ]
}, void 0, true, {
  fileName: "app/components/BlobbyPhoto/BlobbyPhoto.tsx",
  lineNumber: 46,
  columnNumber: 3
}, this);

// app/components/Card/Card.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Card = ({
  children,
  extraClassNames
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: `block rounded-lg bg-white bg-opacity-20 p-6 backdrop-blur-xl backdrop-filter dark:bg-black/30  ${extraClassNames != null ? extraClassNames : ""}`,
  children
}, void 0, false, {
  fileName: "app/components/Card/Card.tsx",
  lineNumber: 12,
  columnNumber: 3
}, this);

// app/components/Icon/Icon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Icon = ({ name, website }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
  href: website,
  "aria-label": name,
  target: "_blank",
  rel: "noreferrer",
  className: "justify-self-center",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    preserveAspectRatio: "xMinYMin",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("use", {
      xlinkHref: name
    }, void 0, false, {
      fileName: "app/components/Icon/Icon.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/Icon/Icon.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: "app/components/Icon/Icon.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this);

// app/components/Icons/Company/sprite.svg
var sprite_default = "/build/_assets/sprite-3QZHA4X6.svg";

// app/components/Icons/Company/Company.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Company = ({ name, website }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "company-icon md-max:company-icon--m sm-max:company-icon--s relative flex flex-col items-center justify-center\n",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
    website,
    name: `${sprite_default}#${name}`
  }, void 0, false, {
    fileName: "app/components/Icons/Company/Company.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: "app/components/Icons/Company/Company.tsx",
  lineNumber: 12,
  columnNumber: 3
}, this);

// app/components/Icons/Social/sprite.svg
var sprite_default2 = "/build/_assets/sprite-YNZRFMUP.svg";

// app/components/Icons/Social/Social.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Social = ({ name, website }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "social-icon md-max:social-icon--m sm-max:social-icon--s relative flex flex-col items-center justify-center rounded-lg\n",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
    website,
    name: `${sprite_default2}#${name}`
  }, void 0, false, {
    fileName: "app/components/Icons/Social/Social.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: "app/components/Icons/Social/Social.tsx",
  lineNumber: 12,
  columnNumber: 3
}, this);

// app/components/Icons/Skill/sprite.svg
var sprite_default3 = "/build/_assets/sprite-2GFNXZ4E.svg";

// app/components/Icons/Skill/Skill.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Skill = ({ name, website }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "skill-icon md-max:skill-icon--m sm-max:skill-icon--s relative flex flex-col items-center justify-center rounded-lg\n",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
    website,
    name: `${sprite_default3}#${name}`
  }, void 0, false, {
    fileName: "app/components/Icons/Skill/Skill.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: "app/components/Icons/Skill/Skill.tsx",
  lineNumber: 12,
  columnNumber: 3
}, this);

// app/views/home/sections/Social.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var SocialIcons = ({ icons }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex min-w-full justify-end",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "md-max:w-sm flex w-[170px] justify-between",
      children: icons.map((icon) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Social, {
        ...icon
      }, icon.website, false, {
        fileName: "app/views/home/sections/Social.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: "app/views/home/sections/Social.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/views/home/sections/Social.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};
var SocialCard = ({ icons }) => {
  const [cursor, setCursor] = (0, import_react3.useState)("|");
  const removeCursor = (0, import_react3.useCallback)(() => setCursor(""), []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "social flex basis-1/2 flex-col items-center justify-center p-8 md-max:absolute md-max:mt-[35%] md-max:min-w-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
      extraClassNames: "social-card md-max:bg-opacity-80 md-max:social-card--md",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
          size: "h1" /* H1 */,
          className: "social-title mb-2 text-justify md-min:mb-4",
          children: "Diogo Parente"
        }, void 0, false, {
          fileName: "app/views/home/sections/Social.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, {
          className: "sm-max:mb-2 sm-max:h-4 sm-max:bg-blue-500 md-max:mb-6 md-max:h-12 md-max:text-c5 dark:md-max:text-c4 lg-max:h-16",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(D, {
            cursor,
            onTypingDone: removeCursor,
            children: [
              "Building things for the web, ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {
                className: "md-min:hidden"
              }, void 0, false, {
                fileName: "app/views/home/sections/Social.tsx",
                lineNumber: 37,
                columnNumber: 42
              }, this),
              "one ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, {
                children: "bug"
              }, void 0, false, {
                fileName: "app/views/home/sections/Social.tsx",
                lineNumber: 38,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(D.Delay, {
                ms: 250
              }, void 0, false, {
                fileName: "app/views/home/sections/Social.tsx",
                lineNumber: 39,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(D.Backspace, {
                count: 1
              }, void 0, false, {
                fileName: "app/views/home/sections/Social.tsx",
                lineNumber: 40,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(D.Delay, {
                ms: 250
              }, void 0, false, {
                fileName: "app/views/home/sections/Social.tsx",
                lineNumber: 41,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(D.Backspace, {
                count: 1
              }, void 0, false, {
                fileName: "app/views/home/sections/Social.tsx",
                lineNumber: 42,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(D.Delay, {
                ms: 250
              }, void 0, false, {
                fileName: "app/views/home/sections/Social.tsx",
                lineNumber: 43,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(D.Backspace, {
                count: 1
              }, void 0, false, {
                fileName: "app/views/home/sections/Social.tsx",
                lineNumber: 44,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, {
                children: "line"
              }, void 0, false, {
                fileName: "app/views/home/sections/Social.tsx",
                lineNumber: 45,
                columnNumber: 13
              }, this),
              " at a time"
            ]
          }, void 0, true, {
            fileName: "app/views/home/sections/Social.tsx",
            lineNumber: 36,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/views/home/sections/Social.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SocialIcons, {
          icons
        }, void 0, false, {
          fileName: "app/views/home/sections/Social.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/views/home/sections/Social.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/views/home/sections/Social.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
};
var SocialSection = ({
  icons,
  photo
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "welcome-background relative flex max-h-[50rem] text-c4 dark:text-c5 md-max:max-h-full md-max:flex-col",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlobbyPhoto, {
      blob: "blob_1",
      imgSrc: photo,
      alt: "diogo-standing"
    }, void 0, false, {
      fileName: "app/views/home/sections/Social.tsx",
      lineNumber: 62,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SocialCard, {
      icons
    }, void 0, false, {
      fileName: "app/views/home/sections/Social.tsx",
      lineNumber: 63,
      columnNumber: 5
    }, this)
  ]
}, void 0, true, {
  fileName: "app/views/home/sections/Social.tsx",
  lineNumber: 61,
  columnNumber: 3
}, this);
var Social_default = SocialSection;

// app/views/home/sections/Skill.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var SkillsSection = ({ icons }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "skill flex flex-col items-center bg-c3 p-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
        size: "h1" /* H1 */,
        className: "mb-10",
        children: "Technologies"
      }, void 0, false, {
        fileName: "app/views/home/sections/Skill.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "skill-wrap md-max:skill-wrap--m",
        children: icons.map((icon) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skill, {
          ...icon
        }, icon.website, false, {
          fileName: "app/views/home/sections/Skill.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: "app/views/home/sections/Skill.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/views/home/sections/Skill.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
var Skill_default = SkillsSection;

// app/views/home/sections/Company.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CompanySection = ({ icons }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "company flex flex-col items-center bg-c2 p-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
        size: "h1" /* H1 */,
        className: "mb-10 text-c3 dark:text-c4",
        children: "Companies"
      }, void 0, false, {
        fileName: "app/views/home/sections/Company.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "company-wrap md-max:company-wrap--m",
        children: icons.map((icon) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Company, {
          ...icon
        }, icon.website, false, {
          fileName: "app/views/home/sections/Company.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: "app/views/home/sections/Company.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/views/home/sections/Company.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
var Company_default = CompanySection;

// app/views/home/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const { photos, skillIcons, socialIcons, companyIcons } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Social_default, {
        icons: socialIcons,
        photo: photos.standing
      }, void 0, false, {
        fileName: "app/views/home/index.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skill_default, {
        icons: skillIcons
      }, void 0, false, {
        fileName: "app/views/home/index.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Company_default, {
        icons: companyIcons
      }, void 0, false, {
        fileName: "app/views/home/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/views/home/index.tsx",
    lineNumber: 10,
    columnNumber: 5
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
//# sourceMappingURL=/build/routes/index-MLXONJ5S.js.map
