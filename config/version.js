const fs = require('fs')
const pack = require('../package.json')

// update installation.md
const installation = fs
  .readFileSync('./gitbook/installation.md', 'utf-8')
  .replace(
    /https:\/\/unpkg\.com\/vue-gorgias@[\d.]+.[\d]+\/dist\/vue-gorgias\.js/,
    'https://unpkg.com/vue-gorgias@' + pack.version + '/dist/vue-gorgias.js.'
  )
fs.writeFileSync('./gitbook/installation.md', installation)
