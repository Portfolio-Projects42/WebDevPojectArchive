if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let i = Promise.resolve()
      return (
        s[e] ||
          (i = new Promise(async (i) => {
            if ('document' in self) {
              const s = document.createElement('script')
              ;(s.src = e), document.head.appendChild(s), (s.onload = i)
            } else importScripts(e), i()
          })),
        i.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`)
          return s[e]
        })
      )
    },
    i = (i, s) => {
      Promise.all(i.map(e)).then((e) => s(1 === e.length ? e[0] : e))
    },
    s = { require: Promise.resolve(i) }
  self.define = (i, a, n) => {
    s[i] ||
      (s[i] = Promise.resolve().then(() => {
        let s = {}
        const r = { uri: location.origin + i.slice(1) }
        return Promise.all(
          a.map((i) => {
            switch (i) {
              case 'exports':
                return s
              case 'module':
                return r
              default:
                return e(i)
            }
          })
        ).then((e) => {
          const i = n(...e)
          return s.default || (s.default = i), s
        })
      }))
  }
}
define('./sw.js', ['./workbox-ea903bce'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/Cn2fr0yvzJw6XBVR38VGV/_buildManifest.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/Cn2fr0yvzJw6XBVR38VGV/_ssgManifest.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/388-ad19df035c1442dad532.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/517-867b7be48926ac527e87.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/main-ea86c848fbb20081a16b.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/%5Bslug%5D-40d77e0cc5dfc72af4d9.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/404-d9aeb6a3dd9592f10e40.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/_app-8b7137c16d5d71cde5a2.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/_error-ae61c22e4772e67f2745.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/css-4beff3fe2c7128fcf483.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/design-17d03180e8c9c4d226f1.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/editor-88db3aa9d8a164398f69.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/general-366def18fdad77ec96d4.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/git-56f63ed8a9be418aeeb5.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/index-215b96fa044f97d14f70.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/javascript-09fface4b88c94246d20.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/newsletter-a253bd63f9653d888dd1.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/next-f6218be8893d3bb54734.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/react-29cee942b615d1cbd135.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/pages/typescript-45507f13f2014044666c.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        {
          url: '/_next/static/chunks/webpack-6d72c6ed51d58793f029.js',
          revision: 'Cn2fr0yvzJw6XBVR38VGV',
        },
        { url: '/feed/rss.xml', revision: 'adc5606920ca1652e17fe9d2f04fa61a' },
        {
          url: '/fonts/inter/Inter-Variable.woff2',
          revision: '812b3dd29751112389e93387c4f7dd0a',
        },
        {
          url: '/fonts/mononoki/mononoki-Bold.woff2',
          revision: 'be681865285aae6e1bc34ee96a95aa21',
        },
        {
          url: '/fonts/mononoki/mononoki-Regular.woff2',
          revision: 'c4ee22aadec38d20df3245eb9e11d79b',
        },
        {
          url: '/icons/apple-touch-icon.png',
          revision: '72d08831998c273a09ebbba62d06aee9',
        },
        {
          url: '/icons/favicon-16x16.png',
          revision: 'bec7113847e8d3a22e778ec715df70cc',
        },
        {
          url: '/icons/favicon-32x32.png',
          revision: 'ead3a1b047479efb0ae44719ce452ffa',
        },
        {
          url: '/icons/favicon.svg',
          revision: 'f65021b7d2f20763800d92801544ed1e',
        },
        {
          url: '/icons/icon-192x192.png',
          revision: 'f9fff23be70d74f289f8469221f255e1',
        },
        {
          url: '/icons/icon-384x384.png',
          revision: 'e5db125c4f0494cba0ff9bc1af0a891c',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: 'fa7d17accaa8493c87b60f4a52feb05a',
        },
        {
          url: '/images/categories/css.webp',
          revision: '500fa1c6493fb4e9b6ebd8aafcc6dd7e',
        },
        {
          url: '/images/categories/general.webp',
          revision: '9390b1944e92c71ff6511f45eea22522',
        },
        {
          url: '/images/categories/git.webp',
          revision: 'efffcec3c59525b37499094435abcf71',
        },
        {
          url: '/images/categories/javascript.webp',
          revision: 'c896e2567d70f9daef7e8045d8bb1327',
        },
        {
          url: '/images/categories/react.webp',
          revision: '0b1efc87c008f454da6b50e57a7cdc6a',
        },
        {
          url: '/images/clean-git-history/feature-behind-rebase.png',
          revision: 'c64c72b2b7edaf750fcbf781fe511059',
        },
        {
          url: '/images/clean-git-history/feature-behind-upstream.png',
          revision: '45a7aefc628a5e0c8fa3c8208c13270d',
        },
        {
          url: '/images/clean-git-history/first-commits.png',
          revision: 'da1272472777f4ef73c68efde8818fae',
        },
        {
          url: '/images/clean-git-history/first-merge.png',
          revision: '4b88d2074daf86293cd5b0ac60a201fe',
        },
        {
          url: '/images/clean-git-history/og-image.webp',
          revision: 'b559f25b111e4358caecc6fd8b9f3a1a',
        },
        {
          url: '/images/clean-git-history/rebase-checkout.png',
          revision: 'da31339941fe7b57ed0a3a317a1011ac',
        },
        {
          url: '/images/clean-git-history/rebase-commit-change.png',
          revision: 'fe48f36896e9111a4a246ee15b11a413',
        },
        {
          url: '/images/clean-git-history/rebase-commit.png',
          revision: 'fd33870c81e13fa418afe14288a03c6f',
        },
        {
          url: '/images/clean-git-history/rebase-complete.png',
          revision: 'e883f3e8185aea4292825abf592b4ac0',
        },
        {
          url: '/images/clean-git-history/rebase-open.png',
          revision: 'b4395434ed91f4600d0d1d404db3e6db',
        },
        {
          url: '/images/clean-git-history/vs-code.png',
          revision: '605a8f856e0c5c697bd28b90f910ab45',
        },
        {
          url: '/images/create-a-coding-sandbox/codepen.png',
          revision: 'f6e390914c240185c26df636ee09688d',
        },
        {
          url: '/images/create-a-coding-sandbox/error.png',
          revision: '2c066fa5cb796122ff20b027349d4e88',
        },
        {
          url: '/images/create-a-coding-sandbox/hello-world.png',
          revision: '1a04e136f8ba4484b6d7de63e175be6a',
        },
        {
          url: '/images/create-a-coding-sandbox/monaco.png',
          revision: 'c455d2e0b5d58e48c0b8f7593551dc35',
        },
        {
          url: '/images/create-a-coding-sandbox/og-image.webp',
          revision: '473c6b59fa729593164ff181ab1ffd1e',
        },
        {
          url: '/images/create-a-coding-sandbox/transpiled.png',
          revision: '902e9731200cc241dd722a3e70e1cc00',
        },
        {
          url: '/images/css-focus-outline/border.gif',
          revision: '1c0c6b3d25104919398b3d0df5ed7d3a',
        },
        {
          url: '/images/css-focus-outline/box-shadow.gif',
          revision: 'a341698552ffe127fcb4fa1c6c7cb374',
        },
        {
          url: '/images/css-focus-outline/default.gif',
          revision: 'b4ff1ffd2dacacb6721715b9e6949058',
        },
        {
          url: '/images/css-focus-outline/no-outline.gif',
          revision: 'cc8224f3f872a4b64ee3e930cee9951b',
        },
        {
          url: '/images/css-focus-outline/og-image.webp',
          revision: 'ced10a23ccee6ac74fcb058942b5c2f8',
        },
        {
          url: '/images/css-focus-outline/outline.gif',
          revision: 'a288e1628267405d1efebee147474608',
        },
        {
          url: '/images/cursor-default.webp',
          revision: '28d3450e04656c99a901ed07dc020313',
        },
        {
          url: '/images/cursor-pointer.webp',
          revision: '73d9f84a03326227bee94a9c2858d4bc',
        },
        {
          url: '/images/great-developers-steal/og-image.webp',
          revision: '72273df123d7da534b24b628ab4cecf6',
        },
        {
          url: '/images/great-developers-steal/search-results.webp',
          revision: '5b49e322343812575d5316d46df6b2d6',
        },
        {
          url: '/images/great-developers-steal/spec.webp',
          revision: '2aeaffe542ee5a1599c618ec91925630',
        },
        {
          url: '/images/intro-to-react/js-update.gif',
          revision: '3b101bc560e774a0b5cfc42e68f326b6',
        },
        {
          url: '/images/intro-to-react/og-image.webp',
          revision: '36027a90e95617853c48555c84c1f786',
        },
        {
          url: '/images/intro-to-react/paint-flashing.webp',
          revision: '8b1051e3a6dfefd94e3de3f2c6c0ff96',
        },
        {
          url: '/images/intro-to-react/react-update.gif',
          revision: 'fdc9c39dd828bb13215c0db9edc7fc0b',
        },
        {
          url: '/images/introduction-to-tailwind-css/banding.webp',
          revision: '369f4c155c685aed2766fecbbd22645f',
        },
        {
          url: '/images/introduction-to-tailwind-css/og-image.webp',
          revision: '871c010015ec6435b748cd4dae43ec2c',
        },
        {
          url: '/images/nebula.webp',
          revision: '8005d7f4544c1f48faefc15376de1b9d',
        },
        {
          url: '/images/og-image.webp',
          revision: '988787ecbdd7210ae8f9560a8f95b966',
        },
        {
          url: '/images/react-project-structure/og-image.webp',
          revision: 'f516dd3b1c1ccf44386c11bd1887f276',
        },
        {
          url: '/images/rethink-how-you-write-git-commits/commit.png',
          revision: 'f0297021b1e7ff30ecc71785dc53fad5',
        },
        {
          url: '/images/rethink-how-you-write-git-commits/confused.webp',
          revision: '9c5173d983396680537a4682cbf539c1',
        },
        {
          url: '/images/rethink-how-you-write-git-commits/git.png',
          revision: '70a69ea557133c72ad7466de70235035',
        },
        {
          url: '/images/rethink-how-you-write-git-commits/gitmoji.png',
          revision: '7f87ff9784ab1d9f9d7b053365e2ee77',
        },
        {
          url: '/images/rethink-how-you-write-git-commits/og-image.webp',
          revision: '6bd5b7ea69ac5b084960b220f2d2ee96',
        },
        {
          url: '/images/rethink-how-you-write-git-commits/options.png',
          revision: 'e87ac03fce075d015144ee4f75c79663',
        },
        {
          url: '/images/simpler-color-syntax/og-image.webp',
          revision: 'a04929601ebe1419db8c9039433546d6',
        },
        {
          url: '/images/think-like-a-developer/og-image.webp',
          revision: '251218ffb246b9d0c8a48f755a36faa8',
        },
        {
          url: '/images/using-fonts-on-the-web/basic-latin.webp',
          revision: '3e3810190e1f4806d8db0b25ad1b30ad',
        },
        {
          url: '/images/using-fonts-on-the-web/block.gif',
          revision: 'eac8a645f7ca233f5f01a45a1202c770',
        },
        {
          url: '/images/using-fonts-on-the-web/cdn.webp',
          revision: '4a0f08317f00b8c86d11e8564424732b',
        },
        {
          url: '/images/using-fonts-on-the-web/custom-axis.webp',
          revision: '7f7c29bb0b07fe86a6f34b9f2cc53a5b',
        },
        {
          url: '/images/using-fonts-on-the-web/fallback.gif',
          revision: '61e616ae6da06fcd0559e0897f8a36a9',
        },
        {
          url: '/images/using-fonts-on-the-web/google-variable-fonts.webp',
          revision: 'f60e92c4b2aa0b0601b51b2468b0c162',
        },
        {
          url: '/images/using-fonts-on-the-web/inter-variable-subset.webp',
          revision: 'da294f3689c1be4d3a28440852d99192',
        },
        {
          url: '/images/using-fonts-on-the-web/inter-variable.webp',
          revision: '9faa86e5c494d0fe6b4065d559dd7eb7',
        },
        {
          url: '/images/using-fonts-on-the-web/og-image.webp',
          revision: 'ed17b82bd4a5ed01859236954f755418',
        },
        {
          url: '/images/using-fonts-on-the-web/optional.gif',
          revision: '3c4364569d6f4a52ac1db650f57bd2a7',
        },
        {
          url: '/images/using-fonts-on-the-web/preconnect.webp',
          revision: '986baa4afa151468895b3f0f761fee4b',
        },
        {
          url: '/images/using-fonts-on-the-web/shared-cache-a.webp',
          revision: '77755f206bfb1c0cd7d611869fe3701b',
        },
        {
          url: '/images/using-fonts-on-the-web/shared-cache-b.webp',
          revision: '1a8224e655e86e2e6d1be593062e8a08',
        },
        {
          url: '/images/using-fonts-on-the-web/similar-font.gif',
          revision: 'c2d94b6e179435569697aa16dfed5ce5',
        },
        {
          url: '/images/using-fonts-on-the-web/single-cache-a.webp',
          revision: '826695ec0db5d32faf634caa49bf7d0b',
        },
        {
          url: '/images/using-fonts-on-the-web/single-cache-b.webp',
          revision: '24402d38fecc8de891ef602a06b27a48',
        },
        {
          url: '/images/using-fonts-on-the-web/size.webp',
          revision: '8ae674fc3d27a97ba403964c513957db',
        },
        {
          url: '/images/using-fonts-on-the-web/swap.gif',
          revision: '02ee1424abeee737a1716132130a7cf6',
        },
        {
          url: '/images/using-fonts-on-the-web/unicode.webp',
          revision: 'c2b68440a92945c8958204b854e48a98',
        },
        {
          url: '/images/using-fonts-on-the-web/variable-fonts-axis.gif',
          revision: '00981bbe4e83d787f757cd364c384470',
        },
        {
          url: '/images/web-development-podcasts/chats-with-kent.webp',
          revision: '200a5e710454e5e4e95853df81907b33',
        },
        {
          url: '/images/web-development-podcasts/codepen-radio.webp',
          revision: '6175c43d7f68b983be688ba22958710b',
        },
        {
          url: '/images/web-development-podcasts/compressed.webp',
          revision: '642d2ef8b8bc43bceb73137470dc0537',
        },
        {
          url: '/images/web-development-podcasts/full-stack-radio.webp',
          revision: '23f6152e385f739a24b6dc452217ea09',
        },
        {
          url: '/images/web-development-podcasts/jamstack-radio.webp',
          revision: 'f94edbb48c38609b8c284fce8fe56171',
        },
        {
          url: '/images/web-development-podcasts/js-party.webp',
          revision: 'c941a35d6fc960b1b5d57ebff3e34942',
        },
        {
          url: '/images/web-development-podcasts/ladybug-podcast.webp',
          revision: 'fdcf6c917abdfecfae99f0c34d2007c3',
        },
        {
          url: '/images/web-development-podcasts/og-image.webp',
          revision: '44bf26eb972d4bd335d419f5c0b3a1aa',
        },
        {
          url: '/images/web-development-podcasts/react-podcast.webp',
          revision: 'ac97933cdc65151a419aaea58554fb5e',
        },
        {
          url: '/images/web-development-podcasts/remotely-interesting.webp',
          revision: '2f664247ba3ff27444a8ff92c2a649a4',
        },
        {
          url: '/images/web-development-podcasts/shoptalk.webp',
          revision: '88697cd3670d3a99a05cb4e858b51b11',
        },
        {
          url: '/images/web-development-podcasts/syntax.webp',
          revision: '0bb7ba723c8da9479ff780772b01c1ce',
        },
        {
          url: '/images/web-development-podcasts/the-css-podcast.webp',
          revision: 'db76fb150015a382a489d0bd4485cc8a',
        },
        {
          url: '/images/web-development-podcasts/the-undefined-podcast.webp',
          revision: 'a1879a5c73827107e162829b7e4f9169',
        },
        { url: '/manifest.json', revision: '06b221090a686e165d4febe6f0a12040' },
        {
          url: '/sfx/confirm.mp3',
          revision: '02c6235d616c26c343d9d9009cfe66dc',
        },
        { url: '/sfx/page.mp3', revision: '8f0e21a290d5ca9156cd98a21eb0b901' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: i,
              event: s,
              state: a,
            }) =>
              i && 'opaqueredirect' === i.type
                ? new Response(i.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: i.headers,
                  })
                : i,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-media-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const i = e.pathname
        return !i.startsWith('/api/auth/') && !!i.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    )
})
