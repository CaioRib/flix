'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "23a5138c11d9f41f226ed6d30070f19c",
"assets/assets/images/3t.jpg": "a2ce1a88dfafafbddc6047ffc75878ea",
"assets/assets/images/animal_cordial.jpg": "ae300dfc0810b0452bec7a45e4494e04",
"assets/assets/images/atla.jpg": "5b65b1115886e026df8745ce0fa17a2b",
"assets/assets/images/atla_title.png": "6155f51047594677982d4b6aa0c614d2",
"assets/assets/images/barbie.jpg": "366903010aa45b35d52dd025753a7d93",
"assets/assets/images/bingo.jpg": "496b8c5d2b41f83b6242212690ffe4bd",
"assets/assets/images/breaking_bad.jpeg": "7821e297df27197cdda67e13e82188b8",
"assets/assets/images/carole_and_tuesday.jpg": "e787073ccc9428249afe92313d00c6bc",
"assets/assets/images/carole_and_tuesday_title.png": "1f8f81cf47fccb05606f3df26b7695eb",
"assets/assets/images/cava.jpg": "96d216579968cb138facdee0333ba000",
"assets/assets/images/crown.jpg": "47eaa139afb5abaf6dca5407f64080f7",
"assets/assets/images/crown_title.png": "02fa5258c38d51bbf902520255352dc2",
"assets/assets/images/dahmer.jpg": "75abea4d2feace9d789594516941e8a8",
"assets/assets/images/dark.jpg": "a2e05c2eb6c348b439099bc1ff17594e",
"assets/assets/images/dark_title.png": "91ed56a7afd04fb549164cd35a7f509c",
"assets/assets/images/dfwc.jpg": "12d542fc467be411276974ad91507d0c",
"assets/assets/images/dogs.jpg": "2b8484bf41be42ce95d42c193cec6a8a",
"assets/assets/images/explained.jpg": "431292d11962afefbfe2991fd3d01a67",
"assets/assets/images/G.png": "f639466960d6058138c277ae38271de8",
"assets/assets/images/gekko.png": "1234656dabf358fc45b28c515e985b81",
"assets/assets/images/gekko_title.png": "71caef670f1cb0d4652e7d0f2e170efc",
"assets/assets/images/knives_out.jpg": "c7bd84c6300955d9e3282872607b44d5",
"assets/assets/images/knives_out_title.png": "e7391c121fcdb000c4796c06ff42183d",
"assets/assets/images/lagartixo.png": "71caef670f1cb0d4652e7d0f2e170efc",
"assets/assets/images/little_mermaid.jpg": "8e2f7867175a535aeb02c3cce22ff072",
"assets/assets/images/little_mermaid_title.png": "ee3c1a4321152b448baea8700ae1b52e",
"assets/assets/images/mario.jpg": "0ede851091fe00f12772a57a01788ad4",
"assets/assets/images/netflix.png": "15fcb3894310c79bacf005040c225c6c",
"assets/assets/images/netflix_logo0.png": "90753a23d851213f214e1faccc4947cb",
"assets/assets/images/netflix_logo1.png": "451f1d563a05a249b69772cfbcc456e7",
"assets/assets/images/pocessor.jpg": "e6f41aa009bdfa01a03be58e33515af5",
"assets/assets/images/sintel.jpg": "5b4a20ec9a07e03add61dbfff0def608",
"assets/assets/images/sintel_title.png": "213547e6e216ec48180c091ff8c8f13d",
"assets/assets/images/sorriso1.png": "a56af11c5ee42d5b5ec81224e5408c6e",
"assets/assets/images/spider.jpg": "8957ab1a620d347c3ecd001cef5a3547",
"assets/assets/images/sr1.png": "cdf4fe218cd5877e9e7329bda41edb77",
"assets/assets/images/sr2.png": "5d20b817bb4f2fcb7f74fbb831de3c30",
"assets/assets/images/stranger_things.jpg": "45da3c11ae3d50a599d5a91663664d82",
"assets/assets/images/teotfw.jpg": "b1ad8119028caab99a82ae253eb2a8e5",
"assets/assets/images/thirteen_reasons_why.jpg": "f3c6ba25dc548121333e15a5401b5bd2",
"assets/assets/images/tiger_king.jpg": "09f31639810f01424f9e13d47cfd7075",
"assets/assets/images/umbrella_academy.jpg": "694538108dad1b7bbf145065d438f0d3",
"assets/assets/images/umbrella_academy_title.png": "0fc8a66b919dbffb8cb464dc30939b22",
"assets/assets/images/violet_evergarden.jpg": "2d3095573a37672e6155447e371d6ea6",
"assets/assets/images/witcher.jpg": "36d8eee67f80feedbf05534e642247ae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "023e973c2a44e551b3283e465d819f67",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c308bb07252830143bed72a44c0b3fff",
"/": "c308bb07252830143bed72a44c0b3fff",
"main.dart.js": "f45b23cd857795aaca07eddf62bd182f",
"manifest.json": "cfeae55ec31a1b7fe7f1b89ee3e93455",
"version.json": "ab721aed75f6f1bd7d1a7b4145bbacf6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
