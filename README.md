# Vue Gorgias

[![npm](https://img.shields.io/npm/v/vue-gorgias.svg)](https://www.npmjs.com/package/vue-gorgias)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Import & expose functions from Gorgias easily

## Getting started

To import Gorgias in your VueJS application, you may follow those simple steps:

### Install Vue-Gorgias

```bash
npm install vue-gorgias --save
```

### Use Vue-Gorgias

In your main file, import Vue-gorgias:

```js
import VueGorgias from 'vue-gorgias'

Vue.use(VueGorgias, {
  apiKey: 'YOUR_API_KEY',
  chatId: 'YOUR_CHAT_ID'
})

```

The `API_KEY` and the `CHAT_ID` are provided by Gorgias.


## Options

| Parameter | Description                                                                                     | Required | Default |
|-----------|-------------------------------------------------------------------------------------------------|----------|---------|
| apiKey    | A unique API identifier provided by Gorgias.                                                    | true     | null    |
| chatId    | A unique identifier for the chat to use inside the Gorgias system                               | true     | null    |
| injectCSS* | A path to the CSS to inject inside the Gorgias iframe. This may be a relative or absolute path. | false    | false   |
| debug     | Show the debug logs if needed.                                                                  | false    | false   |

*Currently, we do not have a proper way to customize the chat.
Because of that, we must inject our own CSS inside the chat iframe.
To do so, you can specify a css ***href*** to be injected in your options.

## API

This plugin exposes some methods to help you interact with the Gorgias API.
By default, our methods are exposed through `Vue.gorgias`.

### Ready

Exposes a function that accepts a callback function. The callback function is called only when the plugin is fully loaded. If called after the plugin has been initialized, the callback will be fired imMediately

```js
Vue.gorgias.ready(() => {
  // Do your action here
})
```

### Update user

Update the current user informations. We recommend you to make sure the plugin is fully loaded before calling this function like this:

```js
Vue.gorgias.ready(() => {
  Vue.gorgias.updateUser({
    email: 'user@email.fr',
    givenName: 'some name',
    surname: 'some surname'
  })
})
```

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/chronotruck/vue-gorgias/blob/dev/CONTRIBUTING.md) before making a pull request.

## ©️ License

[MIT](http://opensource.org/licenses/MIT)
