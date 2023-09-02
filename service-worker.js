/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d9c9022d231ec63b9a0d1841bee517a2"
  },
  {
    "url": "assets/css/0.styles.ac150faa.css",
    "revision": "453a3fa0dad52402e2b20a58de935494"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b79c2da0.js",
    "revision": "e8f99f92989847770fb13fc33c94baf8"
  },
  {
    "url": "assets/js/11.38349422.js",
    "revision": "642f36b61f61148e719011715c606ea4"
  },
  {
    "url": "assets/js/12.2af4624c.js",
    "revision": "f69847f2e33784e475d440eb6450cec5"
  },
  {
    "url": "assets/js/13.d52850ea.js",
    "revision": "6299b5de2bc4af81ca406f442d79a642"
  },
  {
    "url": "assets/js/14.cd01abb2.js",
    "revision": "15271f41e0364f2f2704539decbb9948"
  },
  {
    "url": "assets/js/15.36a4e767.js",
    "revision": "544c93473e93d2fac39869a3605fa94a"
  },
  {
    "url": "assets/js/16.d9865885.js",
    "revision": "26f177523f55589c2adb3110dfc00d39"
  },
  {
    "url": "assets/js/17.93e3b0ad.js",
    "revision": "6afad6ffbc6265ebf2366e746222428a"
  },
  {
    "url": "assets/js/18.eda619fb.js",
    "revision": "5c23295f0474c7df8b7f902aa9b169a1"
  },
  {
    "url": "assets/js/19.6a634849.js",
    "revision": "5a6cfb33822169de1969b1ef198aa8d3"
  },
  {
    "url": "assets/js/2.255626f5.js",
    "revision": "d5db5cdff487ae3e468f4c24ffac7cf0"
  },
  {
    "url": "assets/js/20.19f749a9.js",
    "revision": "60f10cd6a0e524965f300c1d3441d9db"
  },
  {
    "url": "assets/js/21.b06e8ea4.js",
    "revision": "31a05e0bfa558bd3fe44a34123dc794a"
  },
  {
    "url": "assets/js/22.9c892eb8.js",
    "revision": "8cfd9c3d439f7d695d90c55f77631d53"
  },
  {
    "url": "assets/js/23.36007bf3.js",
    "revision": "85d80644096b9abb4762d45da33ec0cf"
  },
  {
    "url": "assets/js/24.0f38b173.js",
    "revision": "27de2ade52161b82d19eb1a792e0b718"
  },
  {
    "url": "assets/js/25.1529ecce.js",
    "revision": "2df41635c4c7d70dac3dc949eb3ed8f4"
  },
  {
    "url": "assets/js/26.cc24b924.js",
    "revision": "04d533484e6a1fb9f98a547dce933c90"
  },
  {
    "url": "assets/js/27.7cf47720.js",
    "revision": "7fbe2065d692999c1bffd876c0ffaaeb"
  },
  {
    "url": "assets/js/28.b0b21187.js",
    "revision": "9428ec4ba97b6f21641b7b6f12a21982"
  },
  {
    "url": "assets/js/29.29b9e942.js",
    "revision": "f96dcc40efd05eb64015c50c6593838f"
  },
  {
    "url": "assets/js/3.74742e8f.js",
    "revision": "b81758d0634b2ff1bc910bd402e89bfd"
  },
  {
    "url": "assets/js/30.0cb2e7f4.js",
    "revision": "730ffcec27db5fd7c32cd0d7697bdc3a"
  },
  {
    "url": "assets/js/31.3bad315a.js",
    "revision": "e36aafd9d692ade353f9230ac0b7268b"
  },
  {
    "url": "assets/js/32.43b14fd7.js",
    "revision": "c89e9408604ef4644e3021c127d36bce"
  },
  {
    "url": "assets/js/33.d6bfc933.js",
    "revision": "dee37789fd5e09600e0b1d02f4a9bfad"
  },
  {
    "url": "assets/js/34.f8e75a7b.js",
    "revision": "9334178319c9976e47c5d0f20687054e"
  },
  {
    "url": "assets/js/35.57342ba9.js",
    "revision": "ad2e5a1e3dca407f0653938486061a79"
  },
  {
    "url": "assets/js/36.076f926a.js",
    "revision": "9cb6e49c7433b123bf082dcc0b64036d"
  },
  {
    "url": "assets/js/37.4e98e24d.js",
    "revision": "3012af256c42fd6ceb9f5d88cf2cd6e9"
  },
  {
    "url": "assets/js/38.51c0a67b.js",
    "revision": "e124a58ada4c2b322ac9355832c3116e"
  },
  {
    "url": "assets/js/39.adbfcd3a.js",
    "revision": "4e89f91b614443f7fcf7febbb2164ed3"
  },
  {
    "url": "assets/js/4.92e06f8f.js",
    "revision": "3f9490242a0d403a041af8ba36d4a5f3"
  },
  {
    "url": "assets/js/40.e8561b43.js",
    "revision": "b27861dc10ae68e8d221ccd97a1c4ece"
  },
  {
    "url": "assets/js/41.8aa31876.js",
    "revision": "424b547c0776106dcc870575422b5a31"
  },
  {
    "url": "assets/js/42.3f475bdb.js",
    "revision": "57dac6c634c830a66a44235548ddb045"
  },
  {
    "url": "assets/js/43.25b83d5b.js",
    "revision": "1af5526194546c6193d5553f00f81543"
  },
  {
    "url": "assets/js/44.57e77819.js",
    "revision": "62fdf9a05e5e86fed9df1ce1e98dc7fc"
  },
  {
    "url": "assets/js/45.41733070.js",
    "revision": "8617005ccb457fc57771e8a2915b3705"
  },
  {
    "url": "assets/js/46.bf4bdf7c.js",
    "revision": "e7de189054cb3bad415f7ee68e55cd15"
  },
  {
    "url": "assets/js/47.3c0ab833.js",
    "revision": "ba4b9c53681e022e7c4ff2cff96ba093"
  },
  {
    "url": "assets/js/48.0eae0803.js",
    "revision": "31f6857d003aa890b71c79d7e38fd402"
  },
  {
    "url": "assets/js/49.ef478228.js",
    "revision": "d224a57773247c33307a16a83b1a8bd4"
  },
  {
    "url": "assets/js/5.d8daf814.js",
    "revision": "c405923ea9a0a75060900682faf7a8ff"
  },
  {
    "url": "assets/js/50.0d9b3a68.js",
    "revision": "0afd3e83eb6de0637a1fdcdec526df00"
  },
  {
    "url": "assets/js/51.1deeb474.js",
    "revision": "26ce18b6e840fc333673ff86ad44ffc4"
  },
  {
    "url": "assets/js/52.de7f244a.js",
    "revision": "82c0cb8a4d36c0a5f5703ae29f673f8c"
  },
  {
    "url": "assets/js/53.357bf6aa.js",
    "revision": "44ea7c124ccee63a8c434f76bf74297a"
  },
  {
    "url": "assets/js/54.97ab9a21.js",
    "revision": "16aed4a9b9090ce595f6c78793ef66ce"
  },
  {
    "url": "assets/js/55.55201fae.js",
    "revision": "929dd57542ac72d01e23aff344ab6b34"
  },
  {
    "url": "assets/js/56.20eb2e94.js",
    "revision": "f9ee95581dbbe750e84a94a2870f04e5"
  },
  {
    "url": "assets/js/6.c81edcf3.js",
    "revision": "1295d10a35fe017e418fad689081c20d"
  },
  {
    "url": "assets/js/7.7c6143ba.js",
    "revision": "02301f8ffb3965b651e92eb5718d7923"
  },
  {
    "url": "assets/js/8.e1c09b5e.js",
    "revision": "8415db084036391e56a6cb17b22a2111"
  },
  {
    "url": "assets/js/app.39ecd0f9.js",
    "revision": "f9fca4a35b0186f60a0e7c024c225175"
  },
  {
    "url": "assets/js/vendors~docsearch.76a29222.js",
    "revision": "9637d52e5fc6d45ad3e65cfe36c64139"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "1fb66837defa82ad34ceb1671a10cf95"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c6f4cba581d98cce3156f2a3ee176ea8"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "2c47114aee95b5370f7d86d2c77e8014"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "dd69d5bdb0af2f57e3a68c75d0f02eb3"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "ccfdcc1ea4c0b4a8af323bd01a2ade0d"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "0e57cf737959de494fcdb1b0f0d5b673"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "37aaff074ee01a1fdec407b80ba2e408"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "5c882d5eff4ecfa8a5eec601f168a978"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "eab71c52bc72caa2122fe8d6038c46ba"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "050a2d9b4cbd708020d81ddc98b43866"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "723e4238d33343d5bcf8d3a8b84bb51a"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "2cc5264a3df111fbb50965aa133cf82c"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "f6ab76f173202ca51e5dea8901316f63"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "d19ae3f489865ba05cbce5f1a2a46a95"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "3fe36f76d532ad8a5d92ce1d0b635e50"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "08462cea4db2e0460348706a1a45ab32"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "0dd1e93d1d86bc1511df53f1270e4d41"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "d252b55a07345d26097d88a8dcf9ef00"
  },
  {
    "url": "resources/books.html",
    "revision": "ec432dbee68a3caae7e4d60acb2a7062"
  },
  {
    "url": "resources/community.html",
    "revision": "ddac43d567e69902e1f05851c2d97d26"
  },
  {
    "url": "resources/conferences.html",
    "revision": "19aa85009d5d0c63076b8a07cdf02833"
  },
  {
    "url": "resources/courses.html",
    "revision": "0ae3036fbad94a298710f35559dc642a"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "b8f9e84184b384965a7c7a45021e038d"
  },
  {
    "url": "resources/examples.html",
    "revision": "3971842e096731990b422133bef5ff0d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "9254a5a5b45f9c698c486acb3ce69149"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "141039344301dd4a2f06d4c71abdde7c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5063f3ebe885817a194fb9c5f23e1530"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ad50797ee8b51f44967814d011ad0563"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "0200df47bb74df17882bb951389d4ad5"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b11a4228ff0d3b7be869e908fc987c6a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "1519d20cf574f950c54f190eeffa6f93"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
