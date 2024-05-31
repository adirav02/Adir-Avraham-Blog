import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DaSy1YL9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_C9i-RDhp.mjs');
const _page1 = () => import('./chunks/404_Dj-tZEo-.mjs');
const _page2 = () => import('./chunks/addEmail_Dcuzbwtf.mjs');
const _page3 = () => import('./chunks/sendEmail_CDUSQm8a.mjs');
const _page4 = () => import('./chunks/_id___26nWsBW.mjs');
const _page5 = () => import('./chunks/articles_CPO3vumI.mjs');
const _page6 = () => import('./chunks/_.._DO1bliaA.mjs');
const _page7 = () => import('./chunks/disclaimer_D6_pTe1e.mjs');
const _page8 = () => import('./chunks/newsletter_DX4BaJQ_.mjs');
const _page9 = () => import('./chunks/_.._mhy74MQW.mjs');
const _page10 = () => import('./chunks/tools_CvvuzhFq.mjs');
const _page11 = () => import('./chunks/_.._BEoddMzc.mjs');
const _page12 = () => import('./chunks/index_B0XIPHmB.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/addEmail.json.ts", _page2],
    ["src/pages/api/sendEmail.json.ts", _page3],
    ["src/pages/api/[id].json.ts", _page4],
    ["src/pages/articles.astro", _page5],
    ["src/pages/articles/[...slug].astro", _page6],
    ["src/pages/disclaimer.astro", _page7],
    ["src/pages/newsletter.astro", _page8],
    ["src/pages/subscription/[...id].astro", _page9],
    ["src/pages/tools.astro", _page10],
    ["src/pages/tools/[...slug].astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "71c7686b-4b36-464b-b625-ee7825c334c0"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
