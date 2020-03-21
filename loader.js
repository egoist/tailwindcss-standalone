const fs = require('fs')
const path = require('path')

const NORMALIZE_CSS = `_fs.default.readFileSync(require.resolve('normalize.css'), 'utf8')`
const PREFLIGHT = "_fs.default.readFileSync(`${__dirname}/css/preflight.css`, 'utf8')"

module.exports = async function (source) {
  const done = this.async()

  console.log(`Replacing code in ${this.resourcePath}`)

  if (!source.includes(NORMALIZE_CSS)) {
    return done(new Error(`Can't find the code that uses normalize.css`))
  }

  if (!source.includes(PREFLIGHT)) {
    return done(new Error(`Can't find the code that uses preflight`))
  }

  source = source.replace(NORMALIZE_CSS, JSON.stringify(fs.readFileSync(require.resolve('normalize.css'), 'utf8')))
  .replace(PREFLIGHT, JSON.stringify(fs.readFileSync(`${this.context}/css/preflight.css`, 'utf8')))

  done(null, source)
}