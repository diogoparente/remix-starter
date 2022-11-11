import{a as k,h as u,l as f}from"/build/_shared/chunk-TKDY2NUA.js";import{b as a}from"/build/_shared/chunk-TFY3KWOG.js";var e=a(k()),t=a(f()),p=(r=>(r.DARK="dark",r.LIGHT="light",r))(p||{}),T=Object.values(p),g=(0,e.createContext)(void 0),s="(prefers-color-scheme: dark)",y=()=>window.matchMedia(s).matches?"dark":"light";function R({children:n,specifiedTheme:o}){let[r,h]=(0,e.useState)(()=>o?T.includes(o)?o:null:typeof document=="undefined"?null:y()),l=u(),d=(0,e.useRef)(l);(0,e.useEffect)(()=>{d.current=l},[l]);let c=(0,e.useRef)(!1);return(0,e.useEffect)(()=>{if(!c.current){c.current=!0;return}!r||d.current.submit({theme:r},{action:"action/set-theme",method:"post"})},[r]),(0,e.useEffect)(()=>{let i=window.matchMedia(s),m=()=>{h(i.matches?"dark":"light")};return i.addEventListener("change",m),()=>i.removeEventListener("change",m)},[]),(0,t.jsx)(g.Provider,{value:[r,h],children:n})}var w=`
// hi there dear reader \u{1F44B}
// this is how I make certain we avoid a flash of the wrong theme. If you select
// a theme, then I'll know what you want in the future and you'll not see this
// script anymore.
;(() => {
  const theme = window.matchMedia(${JSON.stringify(s)}).matches
    ? 'dark'
    : 'light';
  const cl = document.documentElement.classList;
  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let me know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }
  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  } else {
    console.warn(
      "Hey, could you let me know you're seeing this message? Thanks!",
    );
  }
})();
`,E=`
  /* default light, but app-preference is "dark" */
  html.dark {
    light-mode {
      display: none;
    }
  }

  /* default light, and no app-preference */
  html:not(.dark) {
    dark-mode {
      display: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    /* prefers dark, but app-preference is "light" */
    html.light {
      dark-mode {
        display: none;
      }
    }

    /* prefers dark, and app-preference is "dark" */
    html.dark,
    /* prefers dark and no app-preference */
    html:not(.light) {
      light-mode {
        display: none;
      }
    }
  }
`;function b({ssrTheme:n}){let[o]=S();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"color-scheme",content:o==="light"?"light dark":"dark light"}),n?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("script",{dangerouslySetInnerHTML:{__html:w}}),(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:E}})]})]})}var v=`;(() => {
  const theme = window.matchMedia(${JSON.stringify(s)}).matches
    ? 'dark'
    : 'light';
  const darkEls = document.querySelectorAll("dark-mode");
  const lightEls = document.querySelectorAll("light-mode");
  for (const darkEl of darkEls) {
    if (theme === "dark") {
      for (const child of darkEl.childNodes) {
        darkEl.parentElement?.append(child);
      }
    }
    darkEl.remove();
  }
  for (const lightEl of lightEls) {
    if (theme === "light") {
      for (const child of lightEl.childNodes) {
        lightEl.parentElement?.append(child);
      }
    }
    lightEl.remove();
  }
})();`;function C({ssrTheme:n}){return n?null:(0,t.jsx)("script",{dangerouslySetInnerHTML:{__html:v}})}function S(){let n=(0,e.useContext)(g);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n}export{R as a,b,C as c,S as d};
