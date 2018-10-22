# Installation

## Direct Download / CDN

https://unpkg.com/vue-gorgias/dist/vue-gorgias

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-gorgias@0.0.0/dist/vue-gorgias.js
 
Include vue-gorgias after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-gorgias/dist/vue-gorgias.js"></script>
```

## NPM

```sh
$ npm install vue-gorgias
```

## Yarn

```sh
$ yarn add vue-gorgias
```

When used with a module system, you must explicitly install the `vue-gorgias` via `Vue.use()`:

```javascript
import Vue from 'vue'
import VueGorgias from 'vue-gorgias'

Vue.use(VueGorgias)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-gorgias` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com/chronotruck/vue-gorgias.git node_modules/vue-gorgias
$ cd node_modules/vue-gorgias
$ npm install
$ npm run build
```

