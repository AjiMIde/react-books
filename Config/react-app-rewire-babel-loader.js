function rewireBabelLoader (config, options) {
  // 找出所有的 loaders
  // console.log(config.module.rules)
  const rules = config.module.rules
  const loaders = rules.find(rule => Array.isArray(rule.oneOf)).oneOf

  // console.log(loaders)
  // 找出两个有babel-loader的配置
  // 正常情况下应该使用这种方法去填被一些 loader 的规则，如果像 custom-cra那样就要整个取出
  // 再进行替换
  loaders.forEach(loader => {
    // console.log(loader, '---\r\b')
    // console.log(loader.loader)
    if (loader.loader && loader.loader.includes('babel')) {
      // 则此时的 loader 为 babel loader
      // console.log(loader, loader.include, loader.exclude)
      // console.log(loader.options.plugins)
      // 进行options 修改

    }
  })
}

module.exports = rewireBabelLoader
