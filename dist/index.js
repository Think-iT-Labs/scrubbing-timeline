"use strict"; var e = require("react"), t = require("react-ace"); function i(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } require("ace-builds/src-noconflict/theme-monokai"); var r = i(e), a = i(t); if ("production" !== process.env.NODE_ENV) { var o = require("react-is"); module.exports = require("./factoryWithTypeCheckers")(o.isElement, !0) } else module.exports = require("./factoryWithThrowingShims")(); var n = Object.freeze({ __proto__: null }); !function (e, t) { void 0 === t && (t = {}); var i = t.insertAt; if (e && "undefined" != typeof document) { var r = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style"); a.type = "text/css", "top" === i && r.firstChild ? r.insertBefore(a, r.firstChild) : r.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e)) } }(":root{--timeline-bar-height:20px;--timeline-cursor-height:30px}.timeline-wrapper{margin:0 auto;position:relative;width:1100px}.timeline-bar{background-color:#a9a9a9;height:20px;position:relative}.timeline-cursor{border-radius:50%;height:30px;left:0;top:calc(var(--timeline-bar-height)/2 - var(--timeline-cursor-height)/2);width:30px}.timeline-cursor,.timeline-item{cursor:pointer;position:absolute}.timeline-item{height:100%;width:3px}.red{background-color:red}.white{background-color:#676767}.timeslot{background-color:#fff;display:none;padding:.3rem 0;position:absolute;right:-13.5px;top:-20px;width:30px;z-index:5}.timeslot p{font-size:10px;margin:0;text-align:center}.timeline-item:hover .timeslot{display:block}.copy-paste-marker{background-color:#bd2e4c5e;position:absolute}"); const { arrayOf: l, exact: s, number: c, oneOf: d, string: m } = n; window.ace.config.set("basePath", "https://cdn.jsdelivr.net/npm/ace-builds@1.4.13/src-noconflict/"); const u = ({ timelineArray: t, duration: i, language: o = "javascript" }) => { const [n, l] = e.useState(t?.[0]); return r.default.createElement("div", { className: "timeline-wrapper" }, r.default.createElement(a.default, { mode: n?.lang ?? o, theme: "monokai", name: "brace-editor", style: { width: t ? "calc(100% + 3px)" : "100%" }, tabSize: 4, readOnly: !0, highlightActiveLine: !1, value: n?.code ?? "", markers: n.markers ?? [] }), r.default.createElement("div", { className: "timeline-bar" }, t && t.map(((e, a) => r.default.createElement("div", { className: "timeline-item " + ("PASTE" !== e.actionType ? "white" : "red"), key: `${e.lang}-${a}`, style: { left: e.time / i * 100 + "%" }, onClick: () => l(t[a]) }, r.default.createElement("div", { className: "timeslot" }, r.default.createElement("p", null, e.time, "s"))))))) }, p = s({ startRow: c.isRequired, endRow: c.isRequired, startCol: c.isRequired, endCol: c.isRequired, className: m.isRequired, type: d(["text", "fullLine", "screenLine"]) }), h = s({ actionType: d(["PASTE", "TEST", "TYPE"]).isRequired, code: m.isRequired, time: c.isRequired, lang: m, markers: l(p) }); u.propTypes = { timelineArray: l(h).isRequired, duration: c.isRequired, language: m }, module.exports = u;
