import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_CYUZCzrY.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"articles/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles","isIndex":false,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles.astro","pathname":"/articles","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"disclaimer/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/disclaimer","isIndex":false,"type":"page","pattern":"^\\/disclaimer\\/?$","segments":[[{"content":"disclaimer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/disclaimer.astro","pathname":"/disclaimer","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"newsletter/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/newsletter","isIndex":false,"type":"page","pattern":"^\\/newsletter\\/?$","segments":[[{"content":"newsletter","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/newsletter.astro","pathname":"/newsletter","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tools/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tools","isIndex":false,"type":"page","pattern":"^\\/tools\\/?$","segments":[[{"content":"tools","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tools.astro","pathname":"/tools","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/addemail.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/addEmail\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"addEmail.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/addEmail.json.ts","pathname":"/api/addEmail.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sendemail.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendEmail\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmail.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendEmail.json.ts","pathname":"/api/sendEmail.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/[id].json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/([^/]+?)\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false},{"content":".json","dynamic":false,"spread":false}]],"params":["id"],"component":"src/pages/api/[id].json.ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DhFmQuSW.js"}],"styles":[{"type":"external","src":"/_astro/articles.ZNW2-fKE.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/subscription/[...id]","isIndex":false,"type":"page","pattern":"^\\/subscription(?:\\/(.*?))?\\/?$","segments":[[{"content":"subscription","dynamic":false,"spread":false}],[{"content":"...id","dynamic":true,"spread":true}]],"params":["...id"],"component":"src/pages/subscription/[...id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/adira/Desktop/Website/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/adira/Desktop/Website/src/pages/tools/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/adira/Desktop/Website/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/adira/Desktop/Website/src/pages/articles.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/adira/Desktop/Website/src/pages/disclaimer.astro",{"propagation":"none","containsHead":true}],["C:/Users/adira/Desktop/Website/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/adira/Desktop/Website/src/pages/newsletter.astro",{"propagation":"none","containsHead":true}],["C:/Users/adira/Desktop/Website/src/pages/subscription/[...id].astro",{"propagation":"none","containsHead":true}],["C:/Users/adira/Desktop/Website/src/pages/tools.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/adira/Desktop/Website/src/components/articles/FeaturedArticles.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/adira/Desktop/Website/src/components/landing-page/ArticlesSection.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tools@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tools/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/api/[id].json.ts":"chunks/pages/_id__BJQ6ERHh.mjs","/src/pages/api/addEmail.json.ts":"chunks/pages/addEmail_C8ldiJED.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Cz3-t2E3.mjs","/src/pages/api/sendEmail.json.ts":"chunks/pages/sendEmail_TuXPoN3P.mjs","\u0000@astrojs-manifest":"manifest_DaSy1YL9.mjs","C:/Users/adira/Desktop/Website/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_C9i-RDhp.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_Dj-tZEo-.mjs","\u0000@astro-page:src/pages/api/addEmail.json@_@ts":"chunks/addEmail_Dcuzbwtf.mjs","\u0000@astro-page:src/pages/api/sendEmail.json@_@ts":"chunks/sendEmail_CDUSQm8a.mjs","\u0000@astro-page:src/pages/api/[id].json@_@ts":"chunks/_id___26nWsBW.mjs","\u0000@astro-page:src/pages/articles@_@astro":"chunks/articles_CPO3vumI.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"chunks/_.._DO1bliaA.mjs","\u0000@astro-page:src/pages/disclaimer@_@astro":"chunks/disclaimer_D6_pTe1e.mjs","\u0000@astro-page:src/pages/newsletter@_@astro":"chunks/newsletter_DX4BaJQ_.mjs","\u0000@astro-page:src/pages/subscription/[...id]@_@astro":"chunks/_.._mhy74MQW.mjs","\u0000@astro-page:src/pages/tools@_@astro":"chunks/tools_CvvuzhFq.mjs","\u0000@astro-page:src/pages/tools/[...slug]@_@astro":"chunks/_.._BEoddMzc.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_B0XIPHmB.mjs","C:/Users/adira/Desktop/Website/src/content/posts/how-i-boosted-my-bench-press-from-80kg-to-145kg-in-2-years-tips-to-help-you-do-the-same.md?astroContentCollectionEntry=true":"chunks/how-i-boosted-my-bench-press-from-80kg-to-145kg-in-2-years-tips-to-help-you-do-the-same_CIEDhN4S.mjs","C:/Users/adira/Desktop/Website/src/content/posts/is-all-this-cardio-really-necessary-for-fat-loss.md?astroContentCollectionEntry=true":"chunks/is-all-this-cardio-really-necessary-for-fat-loss_Ciq95KgB.mjs","C:/Users/adira/Desktop/Website/src/content/tools/1-rep-max-calculator.mdx?astroContentCollectionEntry=true":"chunks/1-rep-max-calculator_BKFwPbSW.mjs","C:/Users/adira/Desktop/Website/src/content/tools/bmi-calculator.mdx?astroContentCollectionEntry=true":"chunks/bmi-calculator_4ApDWrZo.mjs","C:/Users/adira/Desktop/Website/src/content/tools/bmr-calculator.mdx?astroContentCollectionEntry=true":"chunks/bmr-calculator_BhXVhgXQ.mjs","C:/Users/adira/Desktop/Website/src/content/tools/body-fat-calculator.mdx?astroContentCollectionEntry=true":"chunks/body-fat-calculator_CFvdOuRJ.mjs","C:/Users/adira/Desktop/Website/src/content/posts/how-i-boosted-my-bench-press-from-80kg-to-145kg-in-2-years-tips-to-help-you-do-the-same.md?astroPropagatedAssets":"chunks/how-i-boosted-my-bench-press-from-80kg-to-145kg-in-2-years-tips-to-help-you-do-the-same_BAyxeFgH.mjs","C:/Users/adira/Desktop/Website/src/content/posts/is-all-this-cardio-really-necessary-for-fat-loss.md?astroPropagatedAssets":"chunks/is-all-this-cardio-really-necessary-for-fat-loss_DORjCBvY.mjs","C:/Users/adira/Desktop/Website/src/content/tools/1-rep-max-calculator.mdx?astroPropagatedAssets":"chunks/1-rep-max-calculator_DSu5STTp.mjs","C:/Users/adira/Desktop/Website/src/content/tools/bmi-calculator.mdx?astroPropagatedAssets":"chunks/bmi-calculator_BxlaXbCZ.mjs","C:/Users/adira/Desktop/Website/src/content/tools/bmr-calculator.mdx?astroPropagatedAssets":"chunks/bmr-calculator_DvVAs0Y2.mjs","C:/Users/adira/Desktop/Website/src/content/tools/body-fat-calculator.mdx?astroPropagatedAssets":"chunks/body-fat-calculator_BuSJH1UZ.mjs","C:/Users/adira/Desktop/Website/src/content/posts/how-i-boosted-my-bench-press-from-80kg-to-145kg-in-2-years-tips-to-help-you-do-the-same.md":"chunks/how-i-boosted-my-bench-press-from-80kg-to-145kg-in-2-years-tips-to-help-you-do-the-same_1Nz6chit.mjs","C:/Users/adira/Desktop/Website/src/content/posts/is-all-this-cardio-really-necessary-for-fat-loss.md":"chunks/is-all-this-cardio-really-necessary-for-fat-loss_CsAnmj3z.mjs","C:/Users/adira/Desktop/Website/src/content/tools/1-rep-max-calculator.mdx":"chunks/1-rep-max-calculator_HW89p3Wl.mjs","C:/Users/adira/Desktop/Website/src/content/tools/bmi-calculator.mdx":"chunks/bmi-calculator_DnAwvG8p.mjs","C:/Users/adira/Desktop/Website/src/content/tools/bmr-calculator.mdx":"chunks/bmr-calculator_DM2YPkuN.mjs","C:/Users/adira/Desktop/Website/src/content/tools/body-fat-calculator.mdx":"chunks/body-fat-calculator_BmWaBdFL.mjs","C:/Users/adira/Desktop/Website/src/components/forms/FormCTAFull.tsx":"_astro/FormCTAFull.l1muUf6N.js","C:/Users/adira/Desktop/Website/src/components/forms/HeroCTAForm.tsx":"_astro/HeroCTAForm.SuRTIpY0.js","C:/Users/adira/Desktop/Website/src/components/email-settings/EmailSettings.tsx":"_astro/EmailSettings.BCOTD9BC.js","C:/Users/adira/Desktop/Website/src/components/tools/BodyFatCalculator.jsx":"_astro/BodyFatCalculator.eGeKrctU.js","C:/Users/adira/Desktop/Website/src/components/tools/BMICalculator.jsx":"_astro/BMICalculator.LSnrMmSM.js","/astro/hoisted.js?q=0":"_astro/hoisted.DhFmQuSW.js","C:/Users/adira/Desktop/Website/src/components/tools/OneRepMaxCalculator.jsx":"_astro/OneRepMaxCalculator.DNZBGL57.js","C:/Users/adira/Desktop/Website/src/components/tools/BasalMetabolicRateCalculator.jsx":"_astro/BasalMetabolicRateCalculator.Bfcom58P.js","@astrojs/react/client.js":"_astro/client.J7s0XX1m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/circledLogoBlue.BU8tezYw.png","/_astro/adir-avraham.BmIh_txY.jpg","/_astro/1rm-calculator-image.BS3wilZN.jpg","/_astro/is-all-this-cardio-really-necessary-for-fat-loss.BRGee3HJ.jpeg","/_astro/bench-press-image.BabWvYp6.jpeg","/_astro/bmr-calculator-image.CzB2pi6x.jpg","/_astro/bmi-calculator-image.CdvntisB.jpg","/_astro/body-fat-calculator-image.Cx1W9nor.jpg","/_astro/articles.ZNW2-fKE.css","/favicon.svg","/_astro/BasalMetabolicRateCalculator.Bfcom58P.js","/_astro/BMICalculator.LSnrMmSM.js","/_astro/BodyFatCalculator.eGeKrctU.js","/_astro/client.J7s0XX1m.js","/_astro/EmailSettings.BCOTD9BC.js","/_astro/FormCTAFull.l1muUf6N.js","/_astro/HeroCTAForm.SuRTIpY0.js","/_astro/hoisted.DhFmQuSW.js","/_astro/index.DhYZZe0J.js","/_astro/jsx-runtime.7faW4zRM.js","/_astro/OneRepMaxCalculator.DNZBGL57.js","/_astro/Popup.BEZ17j6r.js","/_astro/router.nTnAVDTI.js","/404.html","/articles/index.html","/disclaimer/index.html","/newsletter/index.html","/tools/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };
