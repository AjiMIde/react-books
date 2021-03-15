function findSassRules (array) {
  if (array && Array.isArray(array)) {
    return array.filter(obj => {
      const string = JSON.stringify(obj)
      return string.includes('sass') || string.includes('scss')
    })
  } else {
    return []
  }
}

function rewireSassResource (config, options) {
  const loader = {
    loader: 'sass-resources-loader',
    options
  }

  const rules = findSassRules(config.module.rules)

  rules.forEach(rule => {
    const oneOf = findSassRules(rule.oneOf)
    oneOf.forEach(oneOfRule => {
      if (oneOfRule.use) {
        oneOfRule.use.push(loader)
      }
      if (oneOfRule.loader) {
        oneOfRule.loader.push(loader)
      }
    })
  })
}

module.exports = rewireSassResource