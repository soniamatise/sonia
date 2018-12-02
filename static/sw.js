importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3b18a76168fe9675ccfc.js",
    "revision": "b80b2c47ebb66889894e0028180c3968"
  },
  {
    "url": "/_nuxt/52c588fd7cca885a5fb3.js",
    "revision": "fba912ba4dcb17ec8c92d3002d143889"
  },
  {
    "url": "/_nuxt/651c4f210d4acba66e3c.js",
    "revision": "d08a13311306abe5d2dc223d414dfeff"
  },
  {
    "url": "/_nuxt/6e66d11490ebfd5b7685.js",
    "revision": "38befb9e4d5f1b614acb136fa8aff54b"
  },
  {
    "url": "/_nuxt/6fb2f81ef1e1f47ef419.js",
    "revision": "85b3fd8c88fff9c4bd8c9796ed651b63"
  },
  {
    "url": "/_nuxt/73d0c341bff552e81978.js",
    "revision": "9af84ffe5fed05528919a0b156828314"
  },
  {
    "url": "/_nuxt/b9a97a392f67a972aa83.js",
    "revision": "9baf8ba37026fe58edb0c54c86af36bf"
  },
  {
    "url": "/_nuxt/df2e99299b8cf6be4460.js",
    "revision": "776ec76072641b59a8af1cc52f4f4fc7"
  },
  {
    "url": "/_nuxt/dff759f7c960ee3bfc0c.js",
    "revision": "5f930edad39efa7147584a28fb4989ba"
  },
  {
    "url": "/_nuxt/e041556b01f6f4d89e55.js",
    "revision": "99cf8a822e9ab2c9cf1d59b50941ac38"
  },
  {
    "url": "/_nuxt/e7cea23fc7b5f1e81223.js",
    "revision": "5d91c0740f2d85cf4bb47e4956088a4b"
  },
  {
    "url": "/_nuxt/fc8a198985bace97ff83.js",
    "revision": "9f70f7f600a8329808796e523ca1b971"
  }
], {
  "cacheId": "sonia",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





