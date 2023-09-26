# Examples for Client Side Template injection using angular elements

This will run the `elements` app which is the Angular Elements app, and start several SPA's, one with angular.js, one
with angular 12 and one with vue 3. Each of those will utilize the `<lib-element>` element from the `elements` app to
render out in their template. Currently the angular.js app is the only one which then proceeds to execute the injection
attack in the angular element code which prints to the dev tools console.

This monorepo is build with [pnpm](https://pnpm.io/). In the root run:

- `pnpm install`
- `pnpm start`

This will install all dependencies, link the `elements` library with the other apps and start the `ng-app` in watch
mode. Use `pnpm start:all` to start all apps simultaneously.
