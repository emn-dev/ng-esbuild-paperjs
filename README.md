# ng-esbuild-paperjs

NOTE: I'm using yarn but you can use whatever package mgr client you like.

Steps:
1. `npm i -g http-server` this is helpful later
1. `yarn install` inside this project root
1. `yarn build`
  1. At this point you should see errors during build
1. Go to the `application-code-bundle.js` file and add/edit line 200:
  1. `external: ['path', 'fs', 'net', 'tls', 'url', 'assert', 'http', 'https', 'stream', 'zlib', 'util', 'os', 'child_process'],`
1. now run `yarn build` (should be no errors)
1. `cd dist`
1. `http-server`
1. Go to `localhost:8080` and it should be working  

If you add `external: ['path', 'fs', 'net', 'tls', 'url', 'assert', 'http', 'https', 'stream', 'zlib', 'util', 'os', 'child_process'],` as shown in screenshot then angular will build with esbuild.

<img width="1118" alt="image" src="https://github.com/emn-dev/ng-esbuild-paperjs/assets/65034617/6e70d416-5f59-46d7-99c7-b90d69d4ef68">
