# pwa-features

This is a demo of different features available in Progressive Web Apps (PWA) with Service Workers in Angular.


[Demo is here](https://silveridea.github.io/pwa-features/)

[Hire us](http://www.silveridea.net)

[Google Official Documentation for PWA is here](https://developers.google.com/web/fundamentals/codelabs/)



## Setup

```ts
git clone https://github.com/silveridea/pwa-features.git
cd pwa-features
npm install
```
Since "service worker" works only in production mode, we need to build it for prod.
```ts
ng build --prod
```

We need to serve the built version from the "dist" folder.
We will use lite-server to run it.
```ts
npm run lite
```
Now browse to http://localhost:3000

This build copies a better ngsw-worker.js file to the root folder.
For a Linux machine, edit package.json file and replace
```ts
"ngsw-copy1": "copy good-ngsw-worker/ngsw-worker.js dist /Y",
"ngsw-copy2": "copy bs-config.js dist /Y",
```
with
```ts
"ngsw-copy1":   "cp good-ngsw-worker/ngsw-worker.js dist/",
"ngsw-copy2":   "cp bs-config.js dist/",
```

Your feedback is important


[by silveridea](http://www.silveridea.net/?utm_source=github&utm_campaign=link2)
