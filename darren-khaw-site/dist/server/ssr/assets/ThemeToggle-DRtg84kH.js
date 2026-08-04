import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/ThemeToggle.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const saved = window.localStorage.getItem("drunkitten-theme");
		const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		const initial = saved ?? preferred;
		document.documentElement.dataset.theme = initial;
		setTheme(initial);
	}, []);
	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		document.documentElement.dataset.theme = next;
		window.localStorage.setItem("drunkitten-theme", next);
		setTheme(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: "themeToggle",
		type: "button",
		onClick: toggle,
		"aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "toggleTrack",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
				className: "toggleThumb",
				children: theme === "dark" ? "☾" : "☀"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "toggleText",
			children: theme === "dark" ? "Dark" : "Light"
		})]
	});
}
//#endregion
export { ThemeToggle };
