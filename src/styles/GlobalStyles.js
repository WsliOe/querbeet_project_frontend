import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  
  /* Slate from https://tailwindcss.com/docs/customizing-colors */
  --color-slate-50:  #f8fafc;
  --color-slate-100: #f1f5f9;
  --color-slate-200: #e2e8f0;
  --color-slate-300: #cbd5e1;
  --color-slate-400: #94a3b8;
  --color-slate-500: #64748b;
  --color-slate-600: #475569;
  --color-slate-700: #334155;
  --color-slate-800: #1e293b;
  --color-slate-900: #0f172a;
  --color-slate-950: #020617;

  /* Lime from https://tailwindcss.com/docs/customizing-colors */
  --color-lime-50:  #f7fee7;
  --color-lime-100: #ecfccb;
  --color-lime-200: #d9f99d;
  --color-lime-300: #bef264;
  --color-lime-400: #a3e635;
  --color-lime-500: #84cc16;
  --color-lime-600: #65a30d;
  --color-lime-700: #4d7c0f;
  --color-lime-800: #3f6212;
  --color-lime-900: #365314;
  --color-lime-950: #1a2e05;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

html {
  font-size: 70%;
}

body {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  color: var(--color-slate-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-slate-200);
  color: var(--color-slate-500);
}

input:focus,
button:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

`;

export default GlobalStyles;
