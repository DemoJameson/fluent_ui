'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"main.dart.js_9.part.js": "74734466c6efc7437423b9657941a6f8",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/img/light-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/dark-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/light-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/light-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/dark-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/light-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"main.dart.js_30.part.js": "589b289af33ff99dd3bdc2d07bd2b31d",
"index.html": "e8126ac027e6c2ba24fff1ead693e09a",
"/": "e8126ac027e6c2ba24fff1ead693e09a",
"main.dart.js_29.part.js": "737632f81d2f4e3f4884cd1368634339",
"main.dart.js_12.part.js": "aff7f2fbaf40490f09dbcf866dfd5ea9",
"main.dart.js_6.part.js": "4f01e72792a327b7cccab16661624cc2",
"assets/NOTICES": "c0c993dc83fd5a2d3b442d3a138986ab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b6563f51aab4da1919b1718cb313cc3b",
"assets/fonts/MaterialIcons-Regular.otf": "bda2b48a6329d4ccfc68b2287bca28e6",
"assets/FontManifest.json": "6b53bbac7e12ce88331411914c31782e",
"assets/AssetManifest.bin.json": "ddd3257fb805b264e2dadba5b806e0f3",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/AssetManifest.json": "d28c888634906fb585a4e78b850824ca",
"main.dart.js_21.part.js": "c211b36780e1afc87968c8979a028ecf",
"main.dart.js_20.part.js": "53d1c5733a78a2dfe348ce9d8aa93e5b",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"main.dart.js_14.part.js": "c48b27cf9acfb0d8c81633b527f5272c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "02e8e5b45a65528c7580c7177a64754d",
"main.dart.js_2.part.js": "13649a9ab9547afc9a5e997983589cad",
"main.dart.js_24.part.js": "64e0bf3a978269d92879d6973dab0b04",
"main.dart.js_25.part.js": "6b87d5a0313ea35579c2adf86f5c554a",
"main.dart.js_17.part.js": "2657fde40095a62535cde02c92679c2a",
"main.dart.js_4.part.js": "56427f3c92e9e5663fe9c15ecfd0c637",
"main.dart.js_3.part.js": "e60df24ff8c44462b1464574dd0957a6",
"main.dart.js_5.part.js": "1e940d564ee371af2cbfdd62e2f4eda1",
"icons/Icon-maskable-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-maskable-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"main.dart.js_28.part.js": "824d56096c2a0889cffb7d413bc01ac2",
"manifest.json": "1e04e819df5e7720a7659fb598692f21",
"main.dart.js_13.part.js": "6cda01b8d42e1a47e662c52689c90cb5",
"main.dart.js_8.part.js": "4b7d5b3ebf56e8abcd0df6713b155584",
"main.dart.js_22.part.js": "64df9a063c8be761c4df432d259930cc",
"favicon.png": "aa55c22e0c7bce9da0110b3035be5332",
"main.dart.js_11.part.js": "7c367c178459c4532c3c25576ad3efe5",
"main.dart.js_7.part.js": "471bd156b575f1b4180491f986d2d00d",
"main.dart.js_27.part.js": "f48ae10d578cb04ad9dbdf8852d47168",
"main.dart.js_18.part.js": "eb35ac54d3f404c0d507fca132b68571",
"main.dart.js_26.part.js": "1de8fcbf72eb77d95152eca40bde9b8b",
"main.dart.js_10.part.js": "2dc4fc4d7a75972d1132188015051bcb",
"main.dart.js_31.part.js": "a4c7daf6da537e2b6cd63bf7c1ed4bc4",
"main.dart.js_19.part.js": "0f01ef6d8b59aab6df92958a05a505f4",
"main.dart.js_1.part.js": "9bbb7192274d138c9e1b91b4bb0134b8",
"flutter_bootstrap.js": "98776ca0adc9484b4609efb5af0572a7",
"main.dart.js_15.part.js": "2ea72a0cf7f72ddf4b48651f9af6b00f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
