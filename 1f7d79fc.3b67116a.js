(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{142:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return p}));var n=r(0),a=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=a.a.createContext({}),d=function(t){var e=a.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},l=function(t){var e=d(t.components);return a.a.createElement(s.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},b=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),l=d(r),b=n,p=l["".concat(i,".").concat(b)]||l[b]||f[b]||o;return r?a.a.createElement(p,c(c({ref:e},s),{},{components:r})):a.a.createElement(p,c({ref:e},s))}));function p(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},143:function(t,e,r){"use strict";var n=r(0),a=r(19);e.a=function(){var t=Object(n.useContext)(a.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},144:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return i}));var n=r(143),a=r(148);function o(){var t=Object(n.a)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,u=o.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return e+r;var d=r.startsWith(e)?r:e+r.replace(/^\//,"");return s?t+d:d}(o,r,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},148:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return a}))},73:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return u})),r.d(e,"rightToc",(function(){return s})),r.d(e,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(142)),i=r(144),c={sidebar_label:"Friday.BOT",title:"Cast Study: Friday.BOT"},u={unversionedId:"case-study/friday-bot",id:"case-study/friday-bot",isDocsHomePage:!1,title:"Cast Study: Friday.BOT",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/case-study/friday-bot.mdx",slug:"/case-study/friday-bot",permalink:"/docs/case-study/friday-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/case-study/friday-bot.mdx",version:"current",lastUpdatedBy:"chianquan",lastUpdatedAt:1600928687,sidebar_label:"Friday.BOT",sidebar:"docs",previous:{title:"Cast Study",permalink:"/docs/case-study/"},next:{title:"Case Study: OSS.Chat",permalink:"/docs/case-study/osschat-bot"}},s=[],d={rightToc:s};function l(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("img",{alt:"Friday.BOT",src:Object(i.a)("img/docs/friday-bot.svg"),width:"256",height:"256"}),Object(o.b)("p",null,"Friday.Bot is designed for serving the BOT5.Club."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Dashboard: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://friday.bot5.club"}),"https://friday.bot5.club")),Object(o.b)("li",{parentName:"ul"},"GitHub: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wechaty/friday"}),"https://github.com/wechaty/friday"))))}l.isMDXComponent=!0}}]);