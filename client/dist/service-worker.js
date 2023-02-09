/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-8b6cdeda'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "15c75f236ac4e3f74352.png",
    "revision": null
  }, {
    "url": "3459bc54e44ba1e8cad1.jpg",
    "revision": null
  }, {
    "url": "5de0643bf1bbf77878ff.png",
    "revision": null
  }, {
    "url": "682229bafc875df3e570.gif",
    "revision": null
  }, {
    "url": "795efc1086c3b0bee87d.gif",
    "revision": null
  }, {
    "url": "86c274426445d23dc9f6.gif",
    "revision": null
  }, {
    "url": "8e11ddab72ed20393484.png",
    "revision": null
  }, {
    "url": "b3e6f04e79fee463dcb4.png",
    "revision": null
  }, {
    "url": "b6247618e33bcdf2d5ad.gif",
    "revision": null
  }, {
    "url": "ef6b6ef26da71ed32447.gif",
    "revision": null
  }, {
    "url": "index.73de39fbc651f67af3c4.js",
    "revision": null
  }, {
    "url": "index.css",
    "revision": "e22f860db9de98cc088405fa9ed60794"
  }, {
    "url": "index.html",
    "revision": "a9ddb037adeed7f32894d86bc6942f74"
  }, {
    "url": "project-one.58252f3fb131fd160815.js",
    "revision": null
  }, {
    "url": "project-one.html",
    "revision": "177221df93fbfc0d31278b6458c03294"
  }, {
    "url": "project-three.1d113dda40587bff0f80.js",
    "revision": null
  }, {
    "url": "project-three.html",
    "revision": "a8d28d4b13267dc8e6d27c56786af8f5"
  }, {
    "url": "project-two.50ded9eeca674f7923c9.js",
    "revision": null
  }, {
    "url": "project-two.html",
    "revision": "a6a8a151567491fe5a962b913e516457"
  }], {});

}));
